import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile207429Navigator from '../features/UserProfile207429/navigator';
import Tutorial207428Navigator from '../features/Tutorial207428/navigator';
import NotificationList207400Navigator from '../features/NotificationList207400/navigator';
import Settings207399Navigator from '../features/Settings207399/navigator';
import Settings207391Navigator from '../features/Settings207391/navigator';
import UserProfile207389Navigator from '../features/UserProfile207389/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile207429: { screen: UserProfile207429Navigator },
Tutorial207428: { screen: Tutorial207428Navigator },
NotificationList207400: { screen: NotificationList207400Navigator },
Settings207399: { screen: Settings207399Navigator },
Settings207391: { screen: Settings207391Navigator },
UserProfile207389: { screen: UserProfile207389Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
