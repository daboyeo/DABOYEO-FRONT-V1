class KakaoMap {
  private container: HTMLElement;
  private ps: any;
  private map: any;
  private eventHandlerObj: any;

  constructor(container: HTMLElement) {
    this.container = container;
    this.map = new window.kakao.maps.Map(container, {
      center: new window.kakao.maps.LatLng(
        37.566815193740226,
        126.97865792092163
      ),
      level: 3,
    });

    const mapTypeControl = new window.kakao.maps.MapTypeControl();
    this.map.addControl(
      mapTypeControl,
      window.kakao.maps.ControlPosition.TOPRIGHT
    );
    this.ps = new window.kakao.maps.services.Places();
    this.eventHandlerObj = {};
  }

  addEventListener(name: string, handler: Function) {
    this.eventHandlerObj[name] = handler;
  }

  search(keyword: string) {
    this.ps.keywordSearch(keyword, (data, status, pagination) => {
      if (status !== window.kakao.maps.services.Status.OK) return;
      const bounds = new window.kakao.maps.LatLngBounds();

      data.forEach((place) => {
        this.draw(place);
        bounds.extend(new window.kakao.maps.LatLng(place.y, place.x));
      });
      this.map.setBounds(bounds);
    });
  }
  center(lat: number, lot: number) {
    this.map.setLevel(2);
    this.map.setCenter(new window.kakao.maps.LatLng(lat, lot));
  }

  draw(place) {
    const marker = new window.kakao.maps.Marker({
      map: this.map,
      position: new window.kakao.maps.LatLng(place.y, place.x),
    });

    window.kakao.maps.event.addListener(marker, "click", () => {
      const longitude: number = Number(place.x);
      const latitude: number = Number(place.y);
      this.eventHandlerObj["onMarkerClick"]({
        latitude,
        longitude,
        address: place.address_name,
        place: place.place_name,
      });
    });
  }
}

export default KakaoMap;
