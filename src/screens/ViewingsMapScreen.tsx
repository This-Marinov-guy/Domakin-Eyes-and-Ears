import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Button, Card } from '../components';
import { colors, typography, spacing, shadows } from '../theme';

const { width, height } = Dimensions.get('window');

interface PropertyViewing {
  id: string;
  title: string;
  address: string;
  price: string;
  date: string;
  time: string;
  agent: string;
  type: 'scheduled' | 'pending' | 'completed';
  coordinate: {
    latitude: number;
    longitude: number;
  };
  propertyType: 'house' | 'apartment' | 'condo' | 'commercial';
}

export const ViewingsMapScreen: React.FC = () => {
  const [selectedViewing, setSelectedViewing] = useState<PropertyViewing | null>(null);
  const [mapRegion, setMapRegion] = useState({
    latitude: 34.0522,
    longitude: -118.2437,
    latitudeDelta: 0.5,
    longitudeDelta: 0.5,
  });

  const propertyViewings: PropertyViewing[] = [
    {
      id: '1',
      title: 'Modern Luxury Villa',
      address: '1234 Beverly Hills Dr, Beverly Hills, CA',
      price: '$850,000',
      date: 'Today',
      time: '2:00 PM',
      agent: 'Sarah Johnson',
      type: 'scheduled',
      coordinate: { latitude: 34.0736, longitude: -118.4004 },
      propertyType: 'house',
    },
    {
      id: '2',
      title: 'Downtown Penthouse',
      address: '567 Manhattan Ave, Los Angeles, CA',
      price: '$1,200,000',
      date: 'Tomorrow',
      time: '10:00 AM',
      agent: 'Michael Chen',
      type: 'scheduled',
      coordinate: { latitude: 34.0522, longitude: -118.2437 },
      propertyType: 'apartment',
    },
    {
      id: '3',
      title: 'Coastal Retreat',
      address: '890 Ocean View Blvd, Malibu, CA',
      price: '$3,200/month',
      date: 'Jan 30',
      time: '3:30 PM',
      agent: 'Emily Rodriguez',
      type: 'pending',
      coordinate: { latitude: 34.0259, longitude: -118.7798 },
      propertyType: 'house',
    },
    {
      id: '4',
      title: 'City Apartment',
      address: '321 Downtown St, Los Angeles, CA',
      price: '$2,800/month',
      date: 'Jan 28',
      time: '11:00 AM',
      agent: 'David Thompson',
      type: 'completed',
      coordinate: { latitude: 34.0407, longitude: -118.2468 },
      propertyType: 'apartment',
    },
    {
      id: '5',
      title: 'Luxury Condo',
      address: '456 Sunset Blvd, West Hollywood, CA',
      price: '$4,500/month',
      date: 'Feb 2',
      time: '1:00 PM',
      agent: 'Sarah Johnson',
      type: 'scheduled',
      coordinate: { latitude: 34.0983, longitude: -118.3267 },
      propertyType: 'condo',
    },
  ];

  const getMarkerColor = (type: PropertyViewing['type']) => {
    switch (type) {
      case 'scheduled':
        return colors.primary.orange;
      case 'pending':
        return colors.accent.yellow;
      case 'completed':
        return colors.semantic.success;
      default:
        return colors.neutral.mediumGray;
    }
  };

  const getPropertyIcon = (propertyType: PropertyViewing['propertyType']) => {
    switch (propertyType) {
      case 'house':
        return 'home';
      case 'apartment':
        return 'business';
      case 'condo':
        return 'business-outline';
      case 'commercial':
        return 'storefront';
      default:
        return 'home';
    }
  };

  const getStatusIcon = (type: PropertyViewing['type']) => {
    switch (type) {
      case 'scheduled':
        return 'calendar';
      case 'pending':
        return 'time';
      case 'completed':
        return 'checkmark-circle';
      default:
        return 'calendar';
    }
  };

  const renderViewingCard = (viewing: PropertyViewing) => (
    <Card key={viewing.id} variant="standard" style={styles.viewingCard}>
      <View style={styles.viewingHeader}>
        <View style={styles.propertyInfo}>
          <View style={styles.titleRow}>
            <Ionicons 
              name={getPropertyIcon(viewing.propertyType) as any} 
              size={20} 
              color={colors.primary.blue} 
            />
            <Text style={styles.viewingTitle}>{viewing.title}</Text>
          </View>
          <Text style={styles.viewingPrice}>{viewing.price}</Text>
        </View>
        <View style={[styles.statusBadge, { backgroundColor: getMarkerColor(viewing.type) }]}>
          <Ionicons name={getStatusIcon(viewing.type) as any} size={16} color={colors.neutral.white} />
        </View>
      </View>
      
      <View style={styles.viewingDetails}>
        <View style={styles.detailRow}>
          <Ionicons name="location-outline" size={16} color={colors.neutral.textPrimary} />
          <Text style={styles.detailText}>{viewing.address}</Text>
        </View>
        <View style={styles.detailRow}>
          <Ionicons name="calendar-outline" size={16} color={colors.neutral.textPrimary} />
          <Text style={styles.detailText}>{viewing.date} at {viewing.time}</Text>
        </View>
        <View style={styles.detailRow}>
          <Ionicons name="person-outline" size={16} color={colors.neutral.textPrimary} />
          <Text style={styles.detailText}>Agent: {viewing.agent}</Text>
        </View>
      </View>

      <View style={styles.viewingActions}>
        <Button 
          title="View on Map" 
          variant="primary" 
          size="sm" 
          style={styles.actionButton}
          onPress={() => {
            setMapRegion({
              ...viewing.coordinate,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            });
            setSelectedViewing(viewing);
          }}
        />
        <Button 
          title={viewing.type === 'completed' ? 'View Details' : 'Reschedule'} 
          variant="outline" 
          size="sm" 
          style={styles.actionButton}
        />
      </View>
    </Card>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Property Viewings</Text>
        <Text style={styles.headerSubtitle}>
          {propertyViewings.filter(v => v.type === 'scheduled').length} scheduled viewings
        </Text>
      </View>

      <View style={styles.mapContainer}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={mapRegion}
          onRegionChangeComplete={setMapRegion}
          showsUserLocation={true}
          showsMyLocationButton={true}
        >
          {propertyViewings.map((viewing) => (
            <Marker
              key={viewing.id}
              coordinate={viewing.coordinate}
              pinColor={getMarkerColor(viewing.type)}
              onPress={() => setSelectedViewing(viewing)}
            >
              <View style={[styles.customMarker, { backgroundColor: getMarkerColor(viewing.type) }]}>
                <Ionicons 
                  name={getPropertyIcon(viewing.propertyType) as any} 
                  size={20} 
                  color={colors.neutral.white} 
                />
              </View>
              <Callout style={styles.callout}>
                <View style={styles.calloutContent}>
                  <Text style={styles.calloutTitle}>{viewing.title}</Text>
                  <Text style={styles.calloutPrice}>{viewing.price}</Text>
                  <Text style={styles.calloutDate}>{viewing.date} at {viewing.time}</Text>
                </View>
              </Callout>
            </Marker>
          ))}
        </MapView>

        {/* Map Controls */}
        <View style={styles.mapControls}>
          <TouchableOpacity 
            style={styles.controlButton}
            onPress={() => setMapRegion({
              latitude: 34.0522,
              longitude: -118.2437,
              latitudeDelta: 0.5,
              longitudeDelta: 0.5,
            })}
          >
            <Ionicons name="locate" size={24} color={colors.primary.blue} />
          </TouchableOpacity>
        </View>

        {/* Legend */}
        <View style={styles.legend}>
          <View style={styles.legendItem}>
            <View style={[styles.legendDot, { backgroundColor: colors.primary.orange }]} />
            <Text style={styles.legendText}>Scheduled</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendDot, { backgroundColor: colors.accent.yellow }]} />
            <Text style={styles.legendText}>Pending</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendDot, { backgroundColor: colors.semantic.success }]} />
            <Text style={styles.legendText}>Completed</Text>
          </View>
        </View>
      </View>

      {/* Viewings List */}
      <View style={styles.listContainer}>
        <Text style={styles.listTitle}>Upcoming Viewings</Text>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.viewingsList}
        >
          {propertyViewings
            .filter(viewing => viewing.type !== 'completed')
            .map(renderViewingCard)}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.light,
    paddingTop: 0,
  },
  header: {
    paddingHorizontal: spacing[6],
    paddingTop: spacing[16],
    paddingBottom: spacing[4],
    backgroundColor: colors.neutral.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.neutral.borderGray,
  },
  headerTitle: {
    fontSize: typography.fontSize['3xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.neutral.textDark,
    marginBottom: spacing[1],
  },
  headerSubtitle: {
    fontSize: typography.fontSize.base,
    color: colors.neutral.textPrimary,
  },
  mapContainer: {
    flex: 1,
    position: 'relative',
  },
  map: {
    flex: 1,
  },
  customMarker: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: colors.neutral.white,
    ...shadows.base,
  },
  callout: {
    width: 200,
  },
  calloutContent: {
    padding: spacing[3],
  },
  calloutTitle: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.semiBold,
    color: colors.neutral.textDark,
    marginBottom: spacing[1],
  },
  calloutPrice: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
    color: colors.primary.orange,
    marginBottom: spacing[1],
  },
  calloutDate: {
    fontSize: typography.fontSize.sm,
    color: colors.neutral.textPrimary,
  },
  mapControls: {
    position: 'absolute',
    top: spacing[4],
    right: spacing[4],
  },
  controlButton: {
    width: 48,
    height: 48,
    backgroundColor: colors.neutral.white,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    ...shadows.base,
  },
  legend: {
    position: 'absolute',
    bottom: spacing[4],
    left: spacing[4],
    backgroundColor: colors.neutral.white,
    borderRadius: spacing[3],
    padding: spacing[3],
    ...shadows.base,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing[1],
  },
  legendDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: spacing[2],
  },
  legendText: {
    fontSize: typography.fontSize.xs,
    color: colors.neutral.textDark,
  },
  listContainer: {
    backgroundColor: colors.neutral.white,
    paddingTop: spacing[4],
    paddingBottom: spacing[6] + 80, // Account for floating tab bar
    borderTopWidth: 1,
    borderTopColor: colors.neutral.borderGray,
  },
  listTitle: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    color: colors.neutral.textDark,
    marginBottom: spacing[4],
    paddingHorizontal: spacing[6],
  },
  viewingsList: {
    paddingHorizontal: spacing[6],
    gap: spacing[4],
  },
  viewingCard: {
    width: width * 0.8,
    padding: spacing[5],
  },
  viewingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing[4],
  },
  propertyInfo: {
    flex: 1,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
    marginBottom: spacing[1],
  },
  viewingTitle: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.semiBold,
    color: colors.neutral.textDark,
    flex: 1,
  },
  viewingPrice: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    color: colors.primary.orange,
  },
  statusBadge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewingDetails: {
    gap: spacing[2],
    marginBottom: spacing[4],
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
  },
  detailText: {
    fontSize: typography.fontSize.sm,
    color: colors.neutral.textPrimary,
    flex: 1,
  },
  viewingActions: {
    flexDirection: 'row',
    gap: spacing[3],
  },
  actionButton: {
    flex: 1,
  },
}); 