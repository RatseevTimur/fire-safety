import { YMaps, Map, Placemark, FullscreenControl } from "react-yandex-maps";

import "./YandexMap.css"

const YandexMap = () => (
  <YMaps>

    <Map width="100%" height="100%" 
      defaultState={{ 
        center: [44.050733, 42.889120], zoom: 16 
      }} 
    >

      <Placemark
      geometry={[44.050733, 42.889120]}
      modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
      />
      {/* <FullscreenControl /> */}
    </Map>
   
  </YMaps>
);

export default YandexMap;