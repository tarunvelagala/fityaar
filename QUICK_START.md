# 🚀 FitYaar Quick Start

## One-Time Setup (5 minutes)

### On Your Laptop:
```bash
# Install remote-adb
npm install -g remote-adb

# Get your laptop IP
ipconfig getifaddr en0  # Mac
# or check Network settings
```

### On GitHub:
1. Push code to GitHub
2. Open repository → Code → Codespaces → Create

---

## Daily Workflow

### 1. Start ADB Relay (Laptop)
```bash
remote-adb --host 0.0.0.0
```
Keep this running!

### 2. Connect Phone (Codespaces)
```bash
adb connect <YOUR_LAPTOP_IP>:5037
flutter devices
```

### 3. Run App
```bash
flutter run
```

### 4. Develop
- Make changes in Codespaces
- Press `r` for hot reload
- See changes on phone instantly!

---

## Quick Commands

```bash
# Connect phone
adb connect 192.168.1.100:5037

# Check devices
flutter devices

# Run app
flutter run

# Hot reload
r (while app running)

# Restart
R (while app running)

# Quit
q
```

---

## Troubleshooting

**Phone not found?**
```bash
adb kill-server
adb start-server
adb connect <LAPTOP_IP>:5037
```

**remote-adb not working?**
- Check firewall (allow port 5037)
- Verify laptop and Codespaces have internet
- Restart remote-adb

---

**Full guide:** See `CODESPACES_GUIDE.md`
