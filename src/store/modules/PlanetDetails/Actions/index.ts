import { IGlobalPlanetId } from "../Types";

export function setNewPlanetId(planetId: IGlobalPlanetId){
    return{
        type: 'SET',
        payload: planetId,
    }
}
