#!/bin/bash

echo "🚀 Setting up FitYaar Flutter Development Environment..."

# Update package lists
apt-get update

# Install required packages for ADB
echo "📱 Installing ADB and USB tools..."
apt-get install -y android-tools-adb android-tools-fastboot android-sdk-platform-tools usbutils

# Install additional dependencies
apt-get install -y \
    curl \
    git \
    unzip \
    xz-utils \
    zip \
    libglu1-mesa \
    openjdk-17-jdk \
    npm \ 
    
    wget

# Set JAVA_HOME
export JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64
echo "export JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64" >> ~/.bashrc

# Flutter is already installed in the base image at /sdks/flutter
export PATH="$PATH:/sdks/flutter/bin"
echo "export PATH=\"\$PATH:/sdks/flutter/bin\"" >> ~/.bashrc

# Accept Android licenses
echo "✅ Accepting Android licenses..."
yes | flutter doctor --android-licenses 2>/dev/null || true

# Run flutter doctor
echo "🔍 Running Flutter doctor..."
flutter doctor -v

# Get Flutter dependencies (if pubspec.yaml exists)
if [ -f "pubspec.yaml" ]; then
    echo "📦 Getting Flutter dependencies..."
    flutter pub get
fi

# Start ADB server
echo "📱 Starting ADB server..."
adb start-server

echo ""
echo "✅ Setup complete!"
echo ""
echo "📱 To connect your phone via Remote ADB:"
echo "1. Install remote-adb on your laptop the below tools"
echo "1.1 If apt-based (Linux)"
echo "sudo apt update"
echo "sudo apt install android-sdk-platform-tools ngrok"
echo "1.2 If Homebrew macOS"
echo "brew install android-platform-tools ngrok"
echo "1.3 ngrok config add-authtoken <your-token>"
echo "2. Connect phone via USB to laptop"
echo "3. Run on laptop: adb start-server && ngrok tcp 5037"
echo "4. In Codespaces, run: export ADB_SERVER_SOCKET=tcp:<YOUR_NGROK_URL>:<YOUR_NGROK_PORT>"
echo "5. Verify: adb devices"
echo ""
echo "🚀 Ready to build FitYaar!"
