import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  FlatList,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { SearchBar } from 'react-native-elements';
import { Button, Card } from '../components';
import { colors, typography, spacing } from '../theme';

const { width } = Dimensions.get('window');

export const PropertiesScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  const properties = [
    {
      id: 1,
      title: 'Modern Luxury Villa',
      price: '$850,000',
      location: 'Beverly Hills, CA',
      beds: 4,
      baths: 3,
      sqft: '2,500',
      type: 'Sale',
      featured: true,
    },
    {
      id: 2,
      title: 'Downtown Penthouse',
      price: '$1,200,000',
      location: 'Manhattan, NY',
      beds: 3,
      baths: 2,
      sqft: '1,800',
      type: 'Sale',
      featured: false,
    },
    {
      id: 3,
      title: 'Coastal Retreat',
      price: '$3,200/month',
      location: 'Malibu, CA',
      beds: 3,
      baths: 2,
      sqft: '2,100',
      type: 'Rent',
      featured: true,
    },
    {
      id: 4,
      title: 'City Apartment',
      price: '$2,800/month',
      location: 'San Francisco, CA',
      beds: 2,
      baths: 1,
      sqft: '1,200',
      type: 'Rent',
      featured: false,
    },
    {
      id: 5,
      title: 'Suburban Family Home',
      price: '$650,000',
      location: 'Austin, TX',
      beds: 4,
      baths: 3,
      sqft: '2,800',
      type: 'Sale',
      featured: false,
    },
    {
      id: 6,
      title: 'Luxury Condo',
      price: '$4,500/month',
      location: 'Miami, FL',
      beds: 2,
      baths: 2,
      sqft: '1,600',
      type: 'Rent',
      featured: true,
    },
  ];

  const filters = ['All', 'Sale', 'Rent', 'Featured'];

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === 'All' || 
                         property.type === selectedFilter ||
                         (selectedFilter === 'Featured' && property.featured);
    return matchesSearch && matchesFilter;
  });

  const renderProperty = ({ item }: { item: typeof properties[0] }) => (
    <Card variant="property" style={styles.propertyCard}>
      <View style={styles.propertyImage}>
        {item.featured && (
          <View style={styles.propertyBadge}>
            <Text style={styles.badgeText}>Featured</Text>
          </View>
        )}
        <View style={styles.typeBadge}>
          <Text style={styles.typeText}>{item.type}</Text>
        </View>
      </View>
      <View style={styles.propertyContent}>
        <Text style={styles.propertyPrice}>{item.price}</Text>
        <Text style={styles.propertyTitle}>{item.title}</Text>
        <Text style={styles.propertyLocation}>{item.location}</Text>
        <View style={styles.propertyFeatures}>
          <View style={styles.featureItem}>
            <Ionicons name="bed-outline" size={16} color={colors.neutral.textPrimary} />
            <Text style={styles.featureText}>{item.beds}</Text>
          </View>
          <View style={styles.featureItem}>
            <Ionicons name="water-outline" size={16} color={colors.neutral.textPrimary} />
            <Text style={styles.featureText}>{item.baths}</Text>
          </View>
          <View style={styles.featureItem}>
            <MaterialIcons name="square-foot" size={16} color={colors.neutral.textPrimary} />
            <Text style={styles.featureText}>{item.sqft} sqft</Text>
          </View>
        </View>
        <View style={styles.propertyActions}>
          <Button title="View Details" variant="secondary" size="sm" style={styles.actionButton} />
          <Button title="Contact" variant="outline" size="sm" style={styles.actionButton} />
        </View>
      </View>
    </Card>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Properties</Text>
        <Text style={styles.headerSubtitle}>
          {filteredProperties.length} properties available
        </Text>
      </View>

      {/* Search and Filters */}
      <View style={styles.searchSection}>
        <Card variant="elevated" style={styles.searchCard}>
          <SearchBar
            placeholder="Search properties or locations..."
            onChangeText={setSearchQuery}
            value={searchQuery}
            containerStyle={styles.searchBarContainer}
            inputContainerStyle={styles.searchBarInputContainer}
            inputStyle={styles.searchBarInput}
            searchIcon={{ color: colors.neutral.mediumGray }}
            clearIcon={{ color: colors.neutral.mediumGray }}
            placeholderTextColor={colors.neutral.mediumGray}
            platform="default"
          />
          
          <View style={styles.filtersContainer}>
            <Text style={styles.filtersLabel}>Filter by:</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filtersScroll}>
              {filters.map((filter) => (
                <Button
                  key={filter}
                  title={filter}
                  variant={selectedFilter === filter ? 'primary' : 'outline'}
                  size="sm"
                  onPress={() => setSelectedFilter(filter)}
                  style={[
                    styles.filterButton,
                    selectedFilter === filter && styles.activeFilter
                  ]}
                />
              ))}
            </ScrollView>
          </View>
        </Card>
      </View>

      {/* Properties List */}
      <FlatList
        data={filteredProperties}
        renderItem={renderProperty}
        keyExtractor={(item) => item.id.toString()}
        numColumns={1}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.propertiesList}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListEmptyComponent={() => (
          <Card variant="standard" style={styles.emptyState}>
            <View style={styles.emptyStateIcon}>
              <Ionicons name="search-outline" size={48} color={colors.neutral.mediumGray} />
            </View>
            <Text style={styles.emptyStateTitle}>No Properties Found</Text>
            <Text style={styles.emptyStateText}>
              Try adjusting your search criteria or filters
            </Text>
            <Button
              title="Clear Filters"
              variant="primary"
              onPress={() => {
                setSearchQuery('');
                setSelectedFilter('All');
              }}
            />
          </Card>
        )}
      />
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
    paddingBottom: spacing[6],
    backgroundColor: colors.neutral.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.neutral.borderGray,
  },
  headerTitle: {
    fontSize: typography.fontSize['4xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.neutral.textDark,
    marginBottom: spacing[1],
  },
  headerSubtitle: {
    fontSize: typography.fontSize.base,
    color: colors.neutral.textPrimary,
  },
  searchSection: {
    paddingHorizontal: spacing[6],
    paddingVertical: spacing[4],
  },
  searchCard: {
    padding: spacing[6],
  },
  searchBarContainer: {
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    paddingHorizontal: 0,
    marginBottom: spacing[4],
  },
  searchBarInputContainer: {
    backgroundColor: colors.neutral.white,
    borderRadius: spacing[3],
    borderWidth: 1,
    borderColor: colors.neutral.borderGray,
    borderBottomWidth: 1,
  },
  searchBarInput: {
    fontSize: typography.fontSize.base,
    color: colors.neutral.textDark,
  },
  filtersContainer: {
    gap: spacing[3],
  },
  filtersLabel: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.medium,
    color: colors.neutral.textDark,
  },
  filtersScroll: {
    flexDirection: 'row',
  },
  filterButton: {
    marginRight: spacing[2],
    minWidth: 80,
  },
  activeFilter: {
    backgroundColor: colors.primary.orange,
  },
  propertiesList: {
    paddingHorizontal: spacing[6],
    paddingBottom: spacing[6],
  },
  propertyCard: {
    marginBottom: spacing[4],
  },
  propertyImage: {
    height: 200,
    backgroundColor: colors.neutral.lightGray,
    borderRadius: spacing[4],
    marginBottom: spacing[4],
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  propertyBadge: {
    position: 'absolute',
    top: spacing[3],
    left: spacing[3],
    backgroundColor: colors.primary.red,
    borderRadius: spacing[6],
    paddingVertical: spacing[1],
    paddingHorizontal: spacing[3],
  },
  badgeText: {
    color: colors.neutral.white,
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.medium,
    textTransform: 'uppercase',
  },
  typeBadge: {
    position: 'absolute',
    top: spacing[3],
    right: spacing[3],
    backgroundColor: colors.primary.blue,
    borderRadius: spacing[2],
    paddingVertical: spacing[1],
    paddingHorizontal: spacing[3],
  },
  typeText: {
    color: colors.neutral.white,
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.medium,
  },
  propertyContent: {
    gap: spacing[3],
  },
  propertyPrice: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.primary.orange,
  },
  propertyTitle: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.semiBold,
    color: colors.neutral.textDark,
  },
  propertyLocation: {
    fontSize: typography.fontSize.base,
    color: colors.neutral.textPrimary,
  },
  propertyFeatures: {
    flexDirection: 'row',
    gap: spacing[4],
    paddingVertical: spacing[3],
    borderTopWidth: 1,
    borderTopColor: colors.neutral.borderGray,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[1],
  },
  featureIcon: {
    fontSize: 16,
  },
  featureText: {
    fontSize: typography.fontSize.sm,
    color: colors.neutral.textPrimary,
  },
  propertyActions: {
    flexDirection: 'row',
    gap: spacing[3],
    marginTop: spacing[2],
  },
  actionButton: {
    flex: 1,
  },
  separator: {
    height: spacing[4],
  },
  emptyState: {
    alignItems: 'center',
    padding: spacing[10],
    marginTop: spacing[8],
  },
  emptyStateIcon: {
    marginBottom: spacing[4],
  },
  emptyStateTitle: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.neutral.textDark,
    marginBottom: spacing[2],
  },
  emptyStateText: {
    fontSize: typography.fontSize.base,
    color: colors.neutral.textPrimary,
    textAlign: 'center',
    marginBottom: spacing[6],
    lineHeight: typography.fontSize.base * typography.lineHeight.relaxed,
  },
}); 