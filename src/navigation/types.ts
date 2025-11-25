// src/navigation/types.ts

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';

export type RootTabParamList = {
    Home: undefined;
    Workouts: undefined;
    Progress: undefined;
    Profile: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = BottomTabScreenProps<
    RootTabParamList,
    Screen
>;
