# React Native Dimensions API returns undefined

This repository demonstrates a common issue in React Native where the `Dimensions` API returns `undefined` instead of the expected screen dimensions. This can lead to unexpected behavior and crashes.

## Problem

The `Dimensions` API is asynchronous.  Accessing the dimensions immediately after component mount might result in `undefined` being returned. This is particularly problematic when calculating styles or layout based on the screen size. 

## Solution

The solution involves using the `useEffect` hook to fetch dimensions asynchronously and store them in the component's state.  We also provide default values to prevent crashes while the API returns data.

## How to reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npx react-native run-android` or `npx react-native run-ios`.
4. Observe the console for error messages and the app's layout behavior.