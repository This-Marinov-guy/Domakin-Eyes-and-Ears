import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Card } from '../components';
import { colors, typography, spacing, shadows } from '../theme';

const { width } = Dimensions.get('window');

export const HomeScreen: React.FC = () => {
  const featuredProperties = [
    {
      id: 1,
      title: 'Modern Luxury Villa',
      price: '$850,000',
      location: 'Beverly Hills, CA',
      beds: 4,
      baths: 3,
      sqft: '2,500',
    },
    {
      id: 2,
      title: 'Downtown Penthouse',
      price: '$1,200,000',
      location: 'Manhattan, NY',
      beds: 3,
      baths: 2,
      sqft: '1,800',
    },
    {
      id: 3,
      title: 'Coastal Retreat',
      price: '$650,000',
      location: 'Malibu, CA',
      beds: 3,
      baths: 2,
      sqft: '2,100',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <View style={styles.heroContent}>
            <Text style={styles.heroTitle}>Find Your Dream Home</Text>
            <Text style={styles.heroSubtitle}>
              Discover the perfect property with our extensive listings
            </Text>
            <View style={styles.heroButtons}>
              <Button
                title="Browse Properties"
                variant="primary"
                size="lg"
                style={styles.heroButton}
              />
              <Button
                title="Learn More"
                variant="secondary"
                size="lg"
                style={styles.heroButton}
              />
            </View>
          </View>
        </View>

        {/* Search Section */}
        <View style={styles.searchSection}>
          <Card variant="elevated" style={styles.searchCard}>
            <Text style={styles.sectionTitle}>Quick Search</Text>
            <View style={styles.searchFilters}>
              <View style={styles.filterRow}>
                <Button title="Buy" variant="primary" size="sm" style={styles.filterButton} />
                <Button title="Rent" variant="outline" size="sm" style={styles.filterButton} />
                <Button title="Sell" variant="outline" size="sm" style={styles.filterButton} />
              </View>
              <Button title="Search Properties" variant="primary" />
            </View>
          </Card>
        </View>

        {/* Featured Properties */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured Properties</Text>
          <Text style={styles.sectionSubtitle}>
            Handpicked properties for you
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.propertiesScroll}
          >
            {featuredProperties.map((property) => (
              <Card key={property.id} variant="property" style={styles.propertyCard}>
                <View style={styles.propertyImage}>
                  <View style={styles.propertyBadge}>
                    <Text style={styles.badgeText}>Featured</Text>
                  </View>
                </View>
                <View style={styles.propertyContent}>
                  <Text style={styles.propertyPrice}>{property.price}</Text>
                  <Text style={styles.propertyTitle}>{property.title}</Text>
                  <Text style={styles.propertyLocation}>{property.location}</Text>
                  <View style={styles.propertyFeatures}>
                    <Text style={styles.featureText}>{property.beds} bed</Text>
                    <Text style={styles.featureText}>{property.baths} bath</Text>
                    <Text style={styles.featureText}>{property.sqft} sqft</Text>
                  </View>
                </View>
              </Card>
            ))}
          </ScrollView>
        </View>

        {/* Services Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our Services</Text>
          <View style={styles.servicesGrid}>
            <Card variant="elevated" style={styles.serviceCard}>
              <View style={styles.serviceIcon}>
                <Text style={styles.serviceIconText}>🏠</Text>
              </View>
              <Text style={styles.serviceTitle}>Buy Property</Text>
              <Text style={styles.serviceDescription}>
                Find your perfect home with our expert guidance
              </Text>
            </Card>

            <Card variant="elevated" style={styles.serviceCard}>
              <View style={styles.serviceIcon}>
                <Text style={styles.serviceIconText}>🔑</Text>
              </View>
              <Text style={styles.serviceTitle}>Rent Property</Text>
              <Text style={styles.serviceDescription}>
                Discover rental properties that fit your lifestyle
              </Text>
            </Card>

            <Card variant="elevated" style={styles.serviceCard}>
              <View style={styles.serviceIcon}>
                <Text style={styles.serviceIconText}>💰</Text>
              </View>
              <Text style={styles.serviceTitle}>Sell Property</Text>
              <Text style={styles.serviceDescription}>
                Get the best value for your property investment
              </Text>
            </Card>

            <Card variant="elevated" style={styles.serviceCard}>
              <View style={styles.serviceIcon}>
                <Text style={styles.serviceIconText}>📊</Text>
              </View>
              <Text style={styles.serviceTitle}>Market Analysis</Text>
              <Text style={styles.serviceDescription}>
                Expert insights into real estate market trends
              </Text>
            </Card>
          </View>
        </View>

        {/* CTA Section */}
        <View style={styles.ctaSection}>
          <Card variant="standard" style={styles.ctaCard}>
            <Text style={styles.ctaTitle}>Ready to Find Your Dream Home?</Text>
            <Text style={styles.ctaDescription}>
              Join thousands of satisfied customers who found their perfect property with us
            </Text>
            <Button
              title="Get Started Today"
              variant="primary"
              size="lg"
              style={styles.ctaButton}
            />
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.pink,
  },
  heroSection: {
    backgroundColor: colors.background.pink,
    paddingVertical: spacing[16],
    paddingHorizontal: spacing[6],
    alignItems: 'center',
  },
  heroContent: {
    alignItems: 'center',
    maxWidth: 400,
  },
  heroTitle: {
    fontSize: typography.fontSize['6xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.neutral.textDark,
    textAlign: 'center',
    marginBottom: spacing[4],
    lineHeight: typography.fontSize['6xl'] * typography.lineHeight.tight,
  },
  heroSubtitle: {
    fontSize: typography.fontSize.lg,
    color: colors.neutral.textPrimary,
    textAlign: 'center',
    marginBottom: spacing[8],
    lineHeight: typography.fontSize.lg * typography.lineHeight.relaxed,
  },
  heroButtons: {
    flexDirection: 'row',
    gap: spacing[4],
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  heroButton: {
    minWidth: 150,
  },
  searchSection: {
    paddingHorizontal: spacing[6],
    marginTop: -spacing[8],
    marginBottom: spacing[12],
  },
  searchCard: {
    padding: spacing[8],
  },
  searchFilters: {
    gap: spacing[6],
  },
  filterRow: {
    flexDirection: 'row',
    gap: spacing[3],
    justifyContent: 'center',
  },
  filterButton: {
    flex: 1,
    minWidth: 80,
  },
  section: {
    paddingHorizontal: spacing[6],
    marginBottom: spacing[12],
  },
  sectionTitle: {
    fontSize: typography.fontSize['4xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.neutral.textDark,
    marginBottom: spacing[2],
  },
  sectionSubtitle: {
    fontSize: typography.fontSize.lg,
    color: colors.neutral.textPrimary,
    marginBottom: spacing[8],
  },
  propertiesScroll: {
    marginHorizontal: -spacing[6],
  },
  propertyCard: {
    width: width * 0.8,
    marginLeft: spacing[6],
    marginRight: spacing[2],
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
  propertyContent: {
    gap: spacing[2],
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
    marginTop: spacing[2],
  },
  featureText: {
    fontSize: typography.fontSize.sm,
    color: colors.neutral.textPrimary,
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing[4],
  },
  serviceCard: {
    flex: 1,
    minWidth: (width - spacing[6] * 2 - spacing[4]) / 2,
    alignItems: 'center',
    padding: spacing[6],
  },
  serviceIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.background.pinkTwo,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing[4],
  },
  serviceIconText: {
    fontSize: 24,
  },
  serviceTitle: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.semiBold,
    color: colors.neutral.textDark,
    textAlign: 'center',
    marginBottom: spacing[2],
  },
  serviceDescription: {
    fontSize: typography.fontSize.sm,
    color: colors.neutral.textPrimary,
    textAlign: 'center',
    lineHeight: typography.fontSize.sm * typography.lineHeight.relaxed,
  },
  ctaSection: {
    paddingHorizontal: spacing[6],
    marginBottom: spacing[12],
  },
  ctaCard: {
    backgroundColor: colors.primary.blue,
    alignItems: 'center',
    padding: spacing[10],
  },
  ctaTitle: {
    fontSize: typography.fontSize['3xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.neutral.white,
    textAlign: 'center',
    marginBottom: spacing[4],
  },
  ctaDescription: {
    fontSize: typography.fontSize.base,
    color: colors.neutral.white,
    textAlign: 'center',
    marginBottom: spacing[8],
    opacity: 0.9,
    lineHeight: typography.fontSize.base * typography.lineHeight.relaxed,
  },
  ctaButton: {
    backgroundColor: colors.primary.orange,
    borderColor: colors.primary.orange,
  },
}); 