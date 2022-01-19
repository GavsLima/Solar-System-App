import { Reducer } from "redux";
import { IGlobalPlanetId } from "../Types";

const INITIAL_STATE: IGlobalPlanetId = {
    planet_id: '1',
}

const GlobalPlanetID: Reducer<IGlobalPlanetId | any> = (
    state = INITIAL_STATE,
    action,
  ) => {
    switch (action.type) {
      case 'SET': {
        const {planet_id} = action.payload;
        return {
          ...state,
          planet_id,
        };
      }
      default: {
        return state;
      }
    }
  };
  
  export default GlobalPlanetID;
  