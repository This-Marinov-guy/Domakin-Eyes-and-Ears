import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Switch,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Card, Input } from '../components';
import { colors, typography, spacing } from '../theme';

export const ProfileScreen: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    bio: 'Real estate enthusiast looking for the perfect investment property.',
  });

  const [settings, setSettings] = useState({
    notifications: true,
    emailAlerts: false,
    marketUpdates: true,
    darkMode: false,
  });

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const updateSetting = (setting: string, value: boolean) => {
    setSettings(prev => ({ ...prev, [setting]: value }));
  };

  const preferences = [
    { id: 1, title: 'Luxury Properties', selected: true },
    { id: 2, title: 'Investment Properties', selected: false },
    { id: 3, title: 'Residential Homes', selected: true },
    { id: 4, title: 'Commercial Properties', selected: false },
    { id: 5, title: 'Vacation Rentals', selected: true },
  ];

  const recentActivity = [
    {
      id: 1,
      action: 'Viewed Property',
      property: 'Modern Luxury Villa',
      location: 'Beverly Hills, CA',
      time: '2 hours ago',
    },
    {
      id: 2,
      action: 'Saved to Favorites',
      property: 'Downtown Penthouse',
      location: 'Manhattan, NY',
      time: '1 day ago',
    },
    {
      id: 3,
      action: 'Contacted Agent',
      property: 'Coastal Retreat',
      location: 'Malibu, CA',
      time: '3 days ago',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.avatarSection}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>JD</Text>
            </View>
            <Text style={styles.userName}>{formData.firstName} {formData.lastName}</Text>
            <Text style={styles.userEmail}>{formData.email}</Text>
          </View>
        </View>

        {/* Personal Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Personal Information</Text>
          <Card variant="standard" style={styles.formCard}>
            <Input
              label="First Name"
              value={formData.firstName}
              onChangeText={(value) => updateFormData('firstName', value)}
            />
            <Input
              label="Last Name"
              value={formData.lastName}
              onChangeText={(value) => updateFormData('lastName', value)}
            />
            <Input
              label="Email"
              value={formData.email}
              onChangeText={(value) => updateFormData('email', value)}
            />
            <Input
              label="Phone Number"
              value={formData.phone}
              onChangeText={(value) => updateFormData('phone', value)}
            />
            <Input
              label="Bio"
              value={formData.bio}
              onChangeText={(value) => updateFormData('bio', value)}
              multiline
              numberOfLines={4}
            />
            <Button title="Save Changes" variant="primary" />
          </Card>
        </View>

        {/* Preferences */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Property Preferences</Text>
          <Card variant="standard" style={styles.preferencesCard}>
            {preferences.map((preference) => (
              <TouchableOpacity key={preference.id} style={styles.preferenceItem}>
                <Text style={styles.preferenceText}>{preference.title}</Text>
                <View style={[
                  styles.checkbox,
                  preference.selected && styles.checkboxSelected
                ]}>
                  {preference.selected && <Text style={styles.checkmark}>✓</Text>}
                </View>
              </TouchableOpacity>
            ))}
          </Card>
        </View>

        {/* Settings */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Settings</Text>
          <Card variant="standard" style={styles.settingsCard}>
            <View style={styles.settingItem}>
              <View style={styles.settingInfo}>
                <Text style={styles.settingTitle}>Push Notifications</Text>
                <Text style={styles.settingDescription}>
                  Receive notifications for new properties and updates
                </Text>
              </View>
              <Switch
                value={settings.notifications}
                onValueChange={(value) => updateSetting('notifications', value)}
                trackColor={{ false: colors.neutral.mediumGray, true: colors.primary.orange }}
                thumbColor={colors.neutral.white}
              />
            </View>

            <View style={styles.settingItem}>
              <View style={styles.settingInfo}>
                <Text style={styles.settingTitle}>Email Alerts</Text>
                <Text style={styles.settingDescription}>
                  Get email notifications for price changes and new listings
                </Text>
              </View>
              <Switch
                value={settings.emailAlerts}
                onValueChange={(value) => updateSetting('emailAlerts', value)}
                trackColor={{ false: colors.neutral.mediumGray, true: colors.primary.orange }}
                thumbColor={colors.neutral.white}
              />
            </View>

            <View style={styles.settingItem}>
              <View style={styles.settingInfo}>
                <Text style={styles.settingTitle}>Market Updates</Text>
                <Text style={styles.settingDescription}>
                  Weekly market reports and trends
                </Text>
              </View>
              <Switch
                value={settings.marketUpdates}
                onValueChange={(value) => updateSetting('marketUpdates', value)}
                trackColor={{ false: colors.neutral.mediumGray, true: colors.primary.orange }}
                thumbColor={colors.neutral.white}
              />
            </View>

            <View style={[styles.settingItem, styles.lastSettingItem]}>
              <View style={styles.settingInfo}>
                <Text style={styles.settingTitle}>Dark Mode</Text>
                <Text style={styles.settingDescription}>
                  Switch to dark theme
                </Text>
              </View>
              <Switch
                value={settings.darkMode}
                onValueChange={(value) => updateSetting('darkMode', value)}
                trackColor={{ false: colors.neutral.mediumGray, true: colors.primary.orange }}
                thumbColor={colors.neutral.white}
              />
            </View>
          </Card>
        </View>

        {/* Recent Activity */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          <Card variant="standard" style={styles.activityCard}>
            {recentActivity.map((activity, index) => (
              <View key={activity.id} style={[
                styles.activityItem,
                index !== recentActivity.length - 1 && styles.activityItemBorder
              ]}>
                <View style={styles.activityIcon}>
                  <Text style={styles.activityIconText}>
                    {activity.action === 'Viewed Property' ? '👁️' :
                     activity.action === 'Saved to Favorites' ? '❤️' : '📞'}
                  </Text>
                </View>
                <View style={styles.activityInfo}>
                  <Text style={styles.activityAction}>{activity.action}</Text>
                  <Text style={styles.activityProperty}>{activity.property}</Text>
                  <Text style={styles.activityLocation}>{activity.location}</Text>
                </View>
                <Text style={styles.activityTime}>{activity.time}</Text>
              </View>
            ))}
          </Card>
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.quickActions}>
            <Button title="Change Password" variant="outline" style={styles.quickActionButton} />
            <Button title="Privacy Settings" variant="outline" style={styles.quickActionButton} />
            <Button title="Help & Support" variant="outline" style={styles.quickActionButton} />
            <Button title="Sign Out" variant="secondary" style={styles.quickActionButton} />
          </View>
        </View>

        {/* Footer Space */}
        <View style={styles.footer} />
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
    backgroundColor: colors.primary.blue,
    paddingVertical: spacing[10],
  },
  avatarSection: {
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.neutral.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing[4],
  },
  avatarText: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.primary.blue,
  },
  userName: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.neutral.white,
    marginBottom: spacing[1],
  },
  userEmail: {
    fontSize: typography.fontSize.base,
    color: colors.neutral.white,
    opacity: 0.9,
  },
  section: {
    padding: spacing[6],
  },
  sectionTitle: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.neutral.textDark,
    marginBottom: spacing[4],
  },
  formCard: {
    padding: spacing[6],
  },
  preferencesCard: {
    padding: spacing[6],
  },
  preferenceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing[3],
    borderBottomWidth: 1,
    borderBottomColor: colors.neutral.borderGray,
  },
  preferenceText: {
    fontSize: typography.fontSize.base,
    color: colors.neutral.textDark,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: colors.neutral.borderGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxSelected: {
    backgroundColor: colors.primary.orange,
    borderColor: colors.primary.orange,
  },
  checkmark: {
    color: colors.neutral.white,
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.bold,
  },
  settingsCard: {
    padding: spacing[6],
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing[4],
    borderBottomWidth: 1,
    borderBottomColor: colors.neutral.borderGray,
  },
  lastSettingItem: {
    borderBottomWidth: 0,
  },
  settingInfo: {
    flex: 1,
    marginRight: spacing[4],
  },
  settingTitle: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.medium,
    color: colors.neutral.textDark,
    marginBottom: spacing[1],
  },
  settingDescription: {
    fontSize: typography.fontSize.sm,
    color: colors.neutral.textPrimary,
    lineHeight: typography.fontSize.sm * typography.lineHeight.relaxed,
  },
  activityCard: {
    padding: spacing[6],
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing[4],
  },
  activityItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: colors.neutral.borderGray,
  },
  activityIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.background.pinkTwo,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing[4],
  },
  activityIconText: {
    fontSize: 18,
  },
  activityInfo: {
    flex: 1,
  },
  activityAction: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.medium,
    color: colors.neutral.textDark,
  },
  activityProperty: {
    fontSize: typography.fontSize.sm,
    color: colors.neutral.textPrimary,
  },
  activityLocation: {
    fontSize: typography.fontSize.xs,
    color: colors.neutral.mediumGray,
  },
  activityTime: {
    fontSize: typography.fontSize.xs,
    color: colors.neutral.mediumGray,
  },
  quickActions: {
    gap: spacing[3],
  },
  quickActionButton: {
    width: '100%',
  },
  footer: {
    height: spacing[8],
  },
}); 