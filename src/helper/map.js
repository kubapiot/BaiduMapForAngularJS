import {isNull} from './validate';

const DEFAULT_COORDINATION = {
    longitude: 121.506191,
    latitude: 31.245554
};

const DEFAULT_ZOOM = 10;

export function create(element, mapOptions) {
    const map = new BMap.Map(element, mapOptions);

    !isNull(mapOptions) && !isNull(mapOptions.disableDragging) && map.disableDragging();
    !isNull(mapOptions) && !isNull(mapOptions.enableScrollWheelZoom) && map.enableScrollWheelZoom();
    !isNull(mapOptions) && !isNull(mapOptions.disableDoubleClickZoom) && map.disableDoubleClickZoom();
    !isNull(mapOptions) && !isNull(mapOptions.enableKeyboard) && map.enableKeyboard();
    !isNull(mapOptions) && !isNull(mapOptions.enableInertialDragging) && map.enableInertialDragging();
    !isNull(mapOptions) && !isNull(mapOptions.enableContinuousZoom) && map.enableContinuousZoom();
    !isNull(mapOptions) && !isNull(mapOptions.disablePinchToZoom) && map.disablePinchToZoom();
    !isNull(mapOptions) && !isNull(mapOptions.cursor) && map.setDefaultCursor(mapOptions.cursor);
    !isNull(mapOptions) && !isNull(mapOptions.draggingCursor) && map.setDraggingCursor(mapOptions.draggingCursor);
    !isNull(mapOptions) && !isNull(mapOptions.currentCity) && map.setCurrentCity(mapOptions.currentCity);
    !isNull(mapOptions) && !isNull(mapOptions.centerAndZoom) && map.centerAndZoom(new BMap.Point(mapOptions.centerAndZoom.longitude || DEFAULT_COORDINATION.longitude, mapOptions.centerAndZoom.latitude || DEFAULT_COORDINATION.latitude), mapOptions.centerAndZoom.zoom || DEFAULT_ZOOM);

    return map;
}
