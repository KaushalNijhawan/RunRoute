export interface SuggestRouteRequest {
    location: string
    distanceKm: number
    difficulty: 'easy' | 'moderate' | 'hard'
    mood: string[]
    avoid: string[]
    timeOfDay: string
}

export interface Waypoint {
    lat: number
    lng: number
    label: string
}

export interface SuggestRouteResponse {
    routeDescription: string
    waypoints: Waypoint[]
    whyThisRoute: string
    tips: string[]
}

export interface TurnByTurnStep {
    instruction: string
    distanceKm: number
}

export interface DirectionsResponse {
    geometry: any
    distanceKm: number
    durationMins: number
    elevationGain: number
    turnByTurn: TurnByTurnStep[]
}

export interface GeocodeResponse {
    lat: number
    lng: number
    displayName: string
}