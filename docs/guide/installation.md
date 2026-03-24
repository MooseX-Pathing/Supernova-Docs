# Installing Apex Pathing


## Prerequisites to use the library
* Your robot must have a common drivetrain option. Holonomic options supported are Swerve or Mecanum. Tank drive is also supported, but it will not unlock the full potential of Apex Pathing
* A localization system: We currently support Gobilda Pinpoint, Three Wheel Localizer, and 2 Wheel + IMU Localizer
* Must have Android Studio and be comfortable coding in java or kotlin.


# Getting Started with Apex Pathing:
There are two ways to install Apex Pathing, manually adding the library or cloning the quickstart, both are easy.

## Option 1: Adding Apex Pathing to your existing repository
Add Jitpack to your `build.gradle` repositories:
```groovy
repositories {
    maven { url 'https://jitpack.io' }
}
```
add the dependency:
```groovy 
dependencies {
    implementation 'com.github.MooseX-Pathing:ApexPathing:TAG'
}
```
Replace TAG with a release tag or commit hash. Make sure to Gradle sync afterwards.

## Option 2: Fork the quickstart
You can also fork the [quickstart](https://github.com/Apex-Pathing/ApexPathing/tree/Quickstart) to quickly gain access if you want to test Apex Pathing or start a new project.



