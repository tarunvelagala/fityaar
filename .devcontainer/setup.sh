#!/bin/bash

echo "🚀 Setting up FitYaar Flutter Development Environment..."

# Update package lists
apt-get update

# Install required packages for ADB
echo "📱 Installing ADB and USB tools..."
apt-get install -y android-tools-adb android-tools-fastboot usbutils

# Install additional dependencies
apt-get install -y \
    curl \
    git \
    unzip \
    xz-utils \
    zip \
    libglu1-mesa \
    openjdk-17-jdk \
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
echo "1. Install remote-adb on your laptop: npm install -g remote-adb"
echo "2. Connect phone via USB to laptop"
echo "3. Run on laptop: remote-adb --host 0.0.0.0"
echo "4. In Codespaces, run: adb connect <YOUR_LAPTOP_IP>:5037"
echo "5. Verify: adb devices"
echo ""
echo "🚀 Ready to build FitYaar!"
