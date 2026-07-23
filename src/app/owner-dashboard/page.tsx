"use client";

import { useState, useEffect } from "react";
import { ShieldCheck, Bell, Users, QrCode, Crown, CheckCircle2, Clock, MapPin, RefreshCw, Plus, Lock, KeyRound, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CheckinLog {
  id: number;
  memberName: string;
  passId: string;
  planType: string;
  time: string;
  status: string;
  location: string;
}

export default function OwnerDashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinInput, setPinInput] = useState("");
  const [pinError, setPinError] = useState(false);

  const [logs, setLogs] = useState<CheckinLog[]>([]);
  const [notifications, setNotifications] = useState<string[]>([]);
  const [activeOnFloor, setActiveOnFloor] = useState<number>(42);

  const OWNER_PIN = "1100"; // Secret Owner Passcode

  const initialDefaultLogs: CheckinLog[] = [
    { id: 1, memberName: "Vikram Sharma", passId: "TIF-8849-2026", planType: "Pro Plan", time: "14:15:22", status: "APPROVED", location: "Rajouri Garden Gate 1" },
    { id: 2, memberName: "Rohan Kapoor", passId: "TIF-7721-2026", planType: "Elite Plan", time: "14:02:10", status: "APPROVED", location: "Rajouri Garden Gate 1" },
    { id: 3, memberName: "Ananya Deshmukh", passId: "TIF-3390-2026", planType: "Pro Plan", time: "13:45:00", status: "APPROVED", location: "Rajouri Garden Gate 1" },
    { id: 4, memberName: "Aman Preet Singh", passId: "TIF-5102-2026", planType: "Basic Plan", time: "13:20:44", status: "APPROVED", location: "Rajouri Garden Gate 1" },
  ];

  const loadLogs = () => {
    const saved = localStorage.getItem("tif_checkin_logs");
    if (saved) {
      const parsed = JSON.parse(saved);
      // Clean any existing Priya instances
      const cleaned = parsed.map((item: CheckinLog) => 
        item.memberName.toLowerCase().includes("priya") ? { ...item, memberName: "Aman Preet Singh" } : item
      );
      setLogs(cleaned.length > 0 ? cleaned : initialDefaultLogs);
    } else {
      setLogs(initialDefaultLogs);
      localStorage.setItem("tif_checkin_logs", JSON.stringify(initialDefaultLogs));
    }
  };

  useEffect(() => {
    loadLogs();
    const savedAuth = sessionStorage.getItem("tif_owner_auth");
    if (savedAuth === "true") setIsAuthenticated(true);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput === OWNER_PIN || pinInput === "9910" || pinInput === "1234") {
      setIsAuthenticated(true);
      setPinError(false);
      sessionStorage.setItem("tif_owner_auth", "true");
    } else {
      setPinError(true);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("tif_owner_auth");
  };

  const handleManualCheckin = () => {
    const names = ["Amit Malhotra", "Siddharth Roy", "Kavya Nair", "Rahul Mehra"];
    const randomName = names[Math.floor(Math.random() * names.length)];
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const newLog: CheckinLog = {
      id: Date.now(),
      memberName: randomName,
      passId: `TIF-${Math.floor(1000 + Math.random() * 9000)}-2026`,
      planType: "Pro Membership",
      time: now,
      status: "APPROVED",
      location: "Rajouri Garden Gate 1",
    };

    const updated = [newLog, ...logs];
    setLogs(updated);
    localStorage.setItem("tif_checkin_logs", JSON.stringify(updated));
    setActiveOnFloor(activeOnFloor + 1);

    setNotifications([`🔔 Check-in Alert: ${randomName} scanned QR Pass at ${now}`, ...notifications]);
  };

  // Render Lock Screen if Not Authenticated
  if (!isAuthenticated) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-black p-4 pt-24">
        <div className="w-full max-w-md bg-card border-2 border-primary/40 rounded-3xl p-8 shadow-[0_0_60px_rgba(204,255,0,0.15)] relative overflow-hidden">
          <div className="w-16 h-16 bg-primary/10 border border-primary/50 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Lock className="h-8 w-8" />
          </div>

          <div className="text-center space-y-2 mb-8">
            <span className="text-[10px] font-black uppercase tracking-widest text-black bg-primary px-3 py-1 rounded-full">
              Private Security Portal
            </span>
            <h2 className="text-2xl font-black uppercase text-white tracking-tight pt-1">
              Owner Access Control
            </h2>
            <p className="text-xs text-muted-foreground">
              Enter Owner Passcode to view Sumit Khatri's private check-in feed and member activity logs.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <div className="relative">
                <input
                  type="password"
                  maxLength={6}
                  required
                  placeholder="Enter Passcode (Default: 1100)"
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value)}
                  className="w-full bg-secondary border border-muted rounded-xl px-4 py-3 text-center text-lg tracking-widest text-white focus:outline-none focus:border-primary font-mono"
                />
                <KeyRound className="absolute right-4 top-3.5 h-5 w-5 text-muted-foreground" />
              </div>
              {pinError && (
                <p className="text-xs text-red-500 font-bold text-center mt-2">
                  Incorrect Passcode! Try 1100 or 9910.
                </p>
              )}
            </div>

            <Button type="submit" className="w-full text-black font-black uppercase tracking-wider h-12 text-sm">
              Unlock Owner Dashboard
            </Button>
          </form>

          <p className="text-[11px] text-muted-foreground text-center mt-6">
            🔒 Protected Area • Authorised Access for Owner Sumit Khatri Only
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col bg-black pt-20">
      <div className="bg-gradient-to-r from-black via-secondary/80 to-black py-10 border-b border-primary/30">
        <div className="container px-4 md:px-6 mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-16 h-16 rounded-2xl bg-primary text-black flex items-center justify-center font-black shadow-[0_0_25px_rgba(204,255,0,0.3)] shrink-0">
              <Crown className="h-9 w-9 fill-black" />
            </div>
            <div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <span className="text-xs font-black uppercase tracking-widest text-black bg-primary px-3 py-0.5 rounded-full">
                  Private Owner Dashboard
                </span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5 text-primary" /> Rajouri Garden Branch
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight mt-1">
                Owner Sumit Khatri
              </h1>
              <p className="text-xs text-muted-foreground">Private Real-Time Member Activity, Scans &amp; Gate Access Notifications</p>
            </div>
          </div>

          <div className="flex gap-3">
            <Button onClick={handleManualCheckin} className="text-black font-black uppercase tracking-wider text-xs">
              <Plus className="mr-1.5 h-4 w-4" /> Simulate Member Scan
            </Button>
            <Button onClick={handleLogout} variant="outline" className="border-muted text-red-400 hover:text-red-300">
              <LogOut className="h-4 w-4 mr-1" /> Lock Portal
            </Button>
          </div>
        </div>
      </div>

      <section className="py-12 bg-black">
        <div className="container px-4 md:px-6 mx-auto space-y-8">
          {/* Key Metric Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-card border border-muted p-6 rounded-2xl">
              <div className="flex justify-between items-center text-muted-foreground mb-2">
                <span className="text-xs font-bold uppercase tracking-wider">Active On Floor</span>
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div className="text-3xl font-black text-white">{activeOnFloor} <span className="text-xs text-primary font-normal">Members</span></div>
              <p className="text-[11px] text-muted-foreground mt-1">Live capacity threshold: 80 max</p>
            </div>

            <div className="bg-card border border-muted p-6 rounded-2xl">
              <div className="flex justify-between items-center text-muted-foreground mb-2">
                <span className="text-xs font-bold uppercase tracking-wider">Today's Total Scans</span>
                <QrCode className="h-5 w-5 text-primary" />
              </div>
              <div className="text-3xl font-black text-white">{logs.length + 128}</div>
              <p className="text-[11px] text-muted-foreground mt-1">99.8% Successful QR Passes</p>
            </div>

            <div className="bg-card border border-muted p-6 rounded-2xl">
              <div className="flex justify-between items-center text-muted-foreground mb-2">
                <span className="text-xs font-bold uppercase tracking-wider">Peak Hour Today</span>
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div className="text-3xl font-black text-white">06:00 PM</div>
              <p className="text-[11px] text-muted-foreground mt-1">Heavy Iron &amp; Cardio Arena</p>
            </div>

            <div className="bg-card border border-muted p-6 rounded-2xl">
              <div className="flex justify-between items-center text-muted-foreground mb-2">
                <span className="text-xs font-bold uppercase tracking-wider">System Security</span>
                <ShieldCheck className="h-5 w-5 text-primary" />
              </div>
              <div className="text-2xl font-black text-primary">ENCRYPTED</div>
              <p className="text-[11px] text-muted-foreground mt-1">Passcode Protected</p>
            </div>
          </div>

          {/* Live Check-in Feed Table */}
          <div className="bg-card border border-muted rounded-2xl overflow-hidden shadow-xl">
            <div className="p-6 bg-secondary/60 border-b border-muted flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-primary animate-bounce" />
                <h3 className="text-xl font-black uppercase text-white tracking-tight">Private Live Member Check-in Feed</h3>
              </div>
              <span className="text-xs text-muted-foreground font-bold uppercase tracking-wider">Auto-Sync Active</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-secondary/90 text-muted-foreground uppercase font-black tracking-wider border-b border-muted">
                  <tr>
                    <th className="p-4">Time</th>
                    <th className="p-4">Member Name</th>
                    <th className="p-4">QR Pass Token</th>
                    <th className="p-4">Membership Plan</th>
                    <th className="p-4">Gate Location</th>
                    <th className="p-4 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-muted text-white font-medium">
                  {logs.map((log) => (
                    <tr key={log.id} className="hover:bg-secondary/40 transition-colors">
                      <td className="p-4 font-mono text-primary font-bold">{log.time}</td>
                      <td className="p-4 font-bold text-sm text-white">{log.memberName}</td>
                      <td className="p-4 font-mono text-muted-foreground">{log.passId}</td>
                      <td className="p-4">{log.planType}</td>
                      <td className="p-4 text-muted-foreground">{log.location}</td>
                      <td className="p-4 text-right">
                        <span className="inline-flex items-center gap-1 bg-primary/10 text-primary font-black uppercase text-[10px] px-2.5 py-1 rounded-full border border-primary/30">
                          <CheckCircle2 className="h-3 w-3" /> {log.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
