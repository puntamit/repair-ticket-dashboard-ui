
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const Settings = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Manage your system preferences</p>
      </div>

      <Tabs defaultValue="general">
        <TabsList className="mb-6">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general" className="dashboard-card">
          <h2 className="text-xl font-bold mb-4">General Settings</h2>
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="company-name">Company Name</Label>
              <Input id="company-name" defaultValue="Acme Support" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="support-email">Support Email</Label>
              <Input id="support-email" type="email" defaultValue="support@acme.com" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="timezone">Timezone</Label>
              <select
                id="timezone"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option value="utc">UTC (Coordinated Universal Time)</option>
                <option value="est">EST (Eastern Standard Time)</option>
                <option value="pst">PST (Pacific Standard Time)</option>
                <option value="gmt">GMT (Greenwich Mean Time)</option>
              </select>
            </div>
            
            <Separator />
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="auto-assign">Auto-assign tickets</Label>
                  <p className="text-sm text-muted-foreground">
                    Automatically assign new tickets to available technicians
                  </p>
                </div>
                <Switch id="auto-assign" />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="ticket-reminders">Ticket reminders</Label>
                  <p className="text-sm text-muted-foreground">
                    Send reminders for tickets approaching SLA deadlines
                  </p>
                </div>
                <Switch id="ticket-reminders" defaultChecked />
              </div>
            </div>
            
            <div className="flex justify-end">
              <Button>Save Changes</Button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="notifications" className="dashboard-card">
          <h2 className="text-xl font-bold mb-4">Notification Settings</h2>
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="email-notifications">Email notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive email notifications for new and updated tickets
                  </p>
                </div>
                <Switch id="email-notifications" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="browser-notifications">Browser notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive browser notifications for new and updated tickets
                  </p>
                </div>
                <Switch id="browser-notifications" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="digest-emails">Daily digest emails</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive a daily summary of ticket activity
                  </p>
                </div>
                <Switch id="digest-emails" />
              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-2">
              <Label>Notification Events</Label>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="new-ticket" className="rounded text-primary" defaultChecked />
                  <label htmlFor="new-ticket" className="text-sm">New ticket created</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="ticket-update" className="rounded text-primary" defaultChecked />
                  <label htmlFor="ticket-update" className="text-sm">Ticket updated</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="ticket-assigned" className="rounded text-primary" defaultChecked />
                  <label htmlFor="ticket-assigned" className="text-sm">Ticket assigned</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="ticket-closed" className="rounded text-primary" defaultChecked />
                  <label htmlFor="ticket-closed" className="text-sm">Ticket closed</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="user-mention" className="rounded text-primary" defaultChecked />
                  <label htmlFor="user-mention" className="text-sm">User mentioned in comment</label>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end">
              <Button>Save Changes</Button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="security" className="dashboard-card">
          <h2 className="text-xl font-bold mb-4">Security Settings</h2>
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="current-password">Current Password</Label>
              <Input id="current-password" type="password" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="new-password">New Password</Label>
              <Input id="new-password" type="password" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm New Password</Label>
              <Input id="confirm-password" type="password" />
            </div>
            
            <Separator />
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="two-factor">Two-factor authentication</Label>
                  <p className="text-sm text-muted-foreground">
                    Add an extra layer of security to your account
                  </p>
                </div>
                <Switch id="two-factor" />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="session-timeout">Session timeout</Label>
                  <p className="text-sm text-muted-foreground">
                    Automatically log out after period of inactivity
                  </p>
                </div>
                <Switch id="session-timeout" defaultChecked />
              </div>
            </div>
            
            <div className="flex justify-end">
              <Button>Update Password</Button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="advanced" className="dashboard-card">
          <h2 className="text-xl font-bold mb-4">Advanced Settings</h2>
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="api-key">API Key</Label>
              <div className="flex">
                <Input id="api-key" defaultValue="sk_live_12345678901234567890" type="password" className="rounded-r-none" />
                <Button variant="outline" className="rounded-l-none">Copy</Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Use this key to authenticate API requests
              </p>
            </div>
            
            <Separator />
            
            <div>
              <h3 className="font-medium mb-2">Data Management</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline">Export All Data</Button>
                  <Button variant="outline">Import Data</Button>
                </div>
                
                <Button variant="destructive">Delete All Data</Button>
              </div>
            </div>
            
            <div className="flex justify-end">
              <Button>Save Changes</Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
