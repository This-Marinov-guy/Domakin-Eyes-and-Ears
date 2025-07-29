import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  FlatList,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Card } from '../components';
import { colors, typography, spacing } from '../theme';

const { width } = Dimensions.get('window');

export const AgentsScreen: React.FC = () => {
  const agents = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'Senior Real Estate Agent',
      specialization: 'Luxury Properties',
      experience: '8 years',
      rating: 4.9,
      sales: '150+ properties sold',
      location: 'Beverly Hills, CA',
      description: 'Specializing in luxury properties with a focus on personalized service and market expertise.',
    },
    {
      id: 2,
      name: 'Michael Chen',
      title: 'Property Investment Specialist',
      specialization: 'Commercial & Investment',
      experience: '12 years',
      rating: 4.8,
      sales: '200+ properties sold',
      location: 'Manhattan, NY',
      description: 'Expert in commercial real estate and investment properties. Helping clients build wealth through real estate.',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      title: 'First-Time Buyer Specialist',
      specialization: 'Residential Properties',
      experience: '6 years',
      rating: 4.9,
      sales: '120+ properties sold',
      location: 'Austin, TX',
      description: 'Passionate about helping first-time buyers navigate the real estate market with confidence.',
    },
    {
      id: 4,
      name: 'David Thompson',
      title: 'Luxury Home Consultant',
      specialization: 'Luxury & Waterfront',
      experience: '15 years',
      rating: 5.0,
      sales: '300+ properties sold',
      location: 'Miami, FL',
      description: 'Premier agent for luxury and waterfront properties with an unmatched track record.',
    },
  ];

  const testimonials = [
    {
      id: 1,
      text: "Sarah helped us find our dream home in just two weeks. Her knowledge of the luxury market is unparalleled.",
      author: "Jennifer & Mark Wilson",
      property: "Beverly Hills Villa - $2.3M",
    },
    {
      id: 2,
      text: "Michael's investment advice has helped us build a strong real estate portfolio. Highly recommended!",
      author: "Robert Chen",
      property: "Commercial Building - $5.2M",
    },
    {
      id: 3,
      text: "Emily made our first home purchase stress-free. She explained everything and was always available.",
      author: "Ashley & Tom Miller",
      property: "Austin Family Home - $450K",
    },
  ];

  const renderAgent = ({ item }: { item: typeof agents[0] }) => (
    <Card variant="elevated" style={styles.agentCard}>
      <View style={styles.agentHeader}>
        <View style={styles.agentAvatar}>
          <Text style={styles.avatarText}>{item.name.split(' ').map(n => n[0]).join('')}</Text>
        </View>
        <View style={styles.agentInfo}>
          <Text style={styles.agentName}>{item.name}</Text>
          <Text style={styles.agentTitle}>{item.title}</Text>
          <View style={styles.agentRating}>
            <Text style={styles.ratingStars}>⭐⭐⭐⭐⭐</Text>
            <Text style={styles.ratingText}>{item.rating}</Text>
          </View>
        </View>
      </View>

      <View style={styles.agentStats}>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Experience</Text>
          <Text style={styles.statValue}>{item.experience}</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Sales</Text>
          <Text style={styles.statValue}>{item.sales}</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Specialization</Text>
          <Text style={styles.statValue}>{item.specialization}</Text>
        </View>
      </View>

      <Text style={styles.agentDescription}>{item.description}</Text>
      <Text style={styles.agentLocation}>📍 {item.location}</Text>

      <View style={styles.agentActions}>
        <Button title="Contact Agent" variant="primary" style={styles.actionButton} />
        <Button title="View Listings" variant="secondary" style={styles.actionButton} />
      </View>
    </Card>
  );

  const renderTestimonial = ({ item }: { item: typeof testimonials[0] }) => (
    <Card variant="elevated" style={styles.testimonialCard}>
      <Text style={styles.testimonialText}>"{item.text}"</Text>
      <View style={styles.testimonialAuthor}>
        <Text style={styles.authorName}>{item.author}</Text>
        <Text style={styles.authorProperty}>{item.property}</Text>
      </View>
    </Card>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Our Agents</Text>
          <Text style={styles.headerSubtitle}>
            Meet our experienced real estate professionals
          </Text>
        </View>

        {/* Featured Agent */}
        <View style={styles.featuredSection}>
          <Text style={styles.sectionTitle}>Featured Agent</Text>
          <Card variant="elevated" style={styles.featuredAgent}>
            <View style={styles.featuredBadge}>
              <Text style={styles.badgeText}>Top Performer</Text>
            </View>
            <View style={styles.featuredContent}>
              <View style={styles.featuredAvatar}>
                <Text style={styles.featuredAvatarText}>DT</Text>
              </View>
              <Text style={styles.featuredName}>David Thompson</Text>
              <Text style={styles.featuredTitle}>Luxury Home Consultant</Text>
              <Text style={styles.featuredDescription}>
                Premier agent for luxury and waterfront properties with 15 years of experience and 300+ properties sold.
              </Text>
              <View style={styles.featuredStats}>
                <View style={styles.featuredStat}>
                  <Text style={styles.featuredStatValue}>5.0</Text>
                  <Text style={styles.featuredStatLabel}>Rating</Text>
                </View>
                <View style={styles.featuredStat}>
                  <Text style={styles.featuredStatValue}>300+</Text>
                  <Text style={styles.featuredStatLabel}>Sales</Text>
                </View>
                <View style={styles.featuredStat}>
                  <Text style={styles.featuredStatValue}>15</Text>
                  <Text style={styles.featuredStatLabel}>Years</Text>
                </View>
              </View>
              <Button title="Contact David" variant="primary" size="lg" />
            </View>
          </Card>
        </View>

        {/* All Agents */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>All Agents</Text>
          <FlatList
            data={agents}
            renderItem={renderAgent}
            keyExtractor={(item) => item.id.toString()}
            scrollEnabled={false}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        </View>

        {/* Client Testimonials */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>What Our Clients Say</Text>
          <FlatList
            data={testimonials}
            renderItem={renderTestimonial}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.testimonialsContainer}
          />
        </View>

        {/* CTA Section */}
        <View style={styles.ctaSection}>
          <Card variant="standard" style={styles.ctaCard}>
            <Text style={styles.ctaTitle}>Need Help Finding an Agent?</Text>
            <Text style={styles.ctaDescription}>
              Our team will match you with the perfect agent based on your needs and location.
            </Text>
            <Button title="Get Matched" variant="primary" size="lg" />
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.light,
  },
  header: {
    paddingHorizontal: spacing[6],
    paddingVertical: spacing[8],
    backgroundColor: colors.neutral.white,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: typography.fontSize['4xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.neutral.textDark,
    marginBottom: spacing[2],
  },
  headerSubtitle: {
    fontSize: typography.fontSize.lg,
    color: colors.neutral.textPrimary,
    textAlign: 'center',
  },
  featuredSection: {
    padding: spacing[6],
  },
  featuredAgent: {
    backgroundColor: colors.primary.blue,
    position: 'relative',
    overflow: 'hidden',
  },
  featuredBadge: {
    position: 'absolute',
    top: spacing[4],
    right: spacing[4],
    backgroundColor: colors.primary.orange,
    borderRadius: spacing[4],
    paddingVertical: spacing[1],
    paddingHorizontal: spacing[3],
  },
  badgeText: {
    color: colors.neutral.white,
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.medium,
    textTransform: 'uppercase',
  },
  featuredContent: {
    alignItems: 'center',
    padding: spacing[8],
  },
  featuredAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.neutral.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing[4],
  },
  featuredAvatarText: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.primary.blue,
  },
  featuredName: {
    fontSize: typography.fontSize['3xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.neutral.white,
    marginBottom: spacing[1],
  },
  featuredTitle: {
    fontSize: typography.fontSize.lg,
    color: colors.neutral.white,
    opacity: 0.9,
    marginBottom: spacing[4],
  },
  featuredDescription: {
    fontSize: typography.fontSize.base,
    color: colors.neutral.white,
    textAlign: 'center',
    marginBottom: spacing[6],
    lineHeight: typography.fontSize.base * typography.lineHeight.relaxed,
  },
  featuredStats: {
    flexDirection: 'row',
    gap: spacing[8],
    marginBottom: spacing[8],
  },
  featuredStat: {
    alignItems: 'center',
  },
  featuredStatValue: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.neutral.white,
  },
  featuredStatLabel: {
    fontSize: typography.fontSize.sm,
    color: colors.neutral.white,
    opacity: 0.8,
  },
  section: {
    padding: spacing[6],
  },
  sectionTitle: {
    fontSize: typography.fontSize['3xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.neutral.textDark,
    marginBottom: spacing[6],
  },
  agentCard: {
    padding: spacing[6],
  },
  agentHeader: {
    flexDirection: 'row',
    marginBottom: spacing[4],
  },
  agentAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.primary.orange,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing[4],
  },
  avatarText: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
    color: colors.neutral.white,
  },
  agentInfo: {
    flex: 1,
  },
  agentName: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    color: colors.neutral.textDark,
  },
  agentTitle: {
    fontSize: typography.fontSize.base,
    color: colors.neutral.textPrimary,
    marginBottom: spacing[1],
  },
  agentRating: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
  },
  ratingStars: {
    fontSize: typography.fontSize.sm,
  },
  ratingText: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.medium,
    color: colors.neutral.textDark,
  },
  agentStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: spacing[4],
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.neutral.borderGray,
    marginBottom: spacing[4],
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statLabel: {
    fontSize: typography.fontSize.xs,
    color: colors.neutral.textPrimary,
    marginBottom: spacing[1],
  },
  statValue: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.semiBold,
    color: colors.neutral.textDark,
    textAlign: 'center',
  },
  agentDescription: {
    fontSize: typography.fontSize.base,
    color: colors.neutral.textPrimary,
    lineHeight: typography.fontSize.base * typography.lineHeight.relaxed,
    marginBottom: spacing[3],
  },
  agentLocation: {
    fontSize: typography.fontSize.sm,
    color: colors.neutral.textPrimary,
    marginBottom: spacing[4],
  },
  agentActions: {
    flexDirection: 'row',
    gap: spacing[3],
  },
  actionButton: {
    flex: 1,
  },
  separator: {
    height: spacing[4],
  },
  testimonialsContainer: {
    paddingRight: spacing[6],
  },
  testimonialCard: {
    width: width * 0.8,
    marginRight: spacing[4],
    padding: spacing[6],
  },
  testimonialText: {
    fontSize: typography.fontSize.lg,
    color: colors.neutral.textPrimary,
    fontStyle: 'italic',
    lineHeight: typography.fontSize.lg * typography.lineHeight.relaxed,
    marginBottom: spacing[4],
  },
  testimonialAuthor: {
    borderTopWidth: 1,
    borderTopColor: colors.neutral.borderGray,
    paddingTop: spacing[4],
  },
  authorName: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.semiBold,
    color: colors.neutral.textDark,
  },
  authorProperty: {
    fontSize: typography.fontSize.sm,
    color: colors.neutral.textPrimary,
  },
  ctaSection: {
    padding: spacing[6],
  },
  ctaCard: {
    backgroundColor: colors.background.pinkTwo,
    alignItems: 'center',
    padding: spacing[8],
  },
  ctaTitle: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.neutral.textDark,
    textAlign: 'center',
    marginBottom: spacing[3],
  },
  ctaDescription: {
    fontSize: typography.fontSize.base,
    color: colors.neutral.textPrimary,
    textAlign: 'center',
    marginBottom: spacing[6],
    lineHeight: typography.fontSize.base * typography.lineHeight.relaxed,
  },
}); 