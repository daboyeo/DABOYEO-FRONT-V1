class KakaoMap {
  private container: HTMLElement;
  private ps: any;
  private map: any;
  private eventHandlerObj: any;

  constructor(container: HTMLElement) {
    this.container = container;
    this.map = new window.kakao.maps.Map(container, {
      center: new window.kakao.maps.LatLng(37.566815, 126.978646),
      level: 3,
    });
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

      data.forEach(({ x, y }) => {
        this.maker({ x, y });
        bounds.extend(new window.kakao.maps.LatLng(y, x));
      });
      this.map.setBounds(bounds);
    });
  }

  maker(place) {
    const marker = new window.kakao.maps.Marker({
      map: this.map,
      position: new window.kakao.maps.LatLng(place.y, place.x),
    });

    window.kakao.maps.event.addListener(marker, "click", () => {
      const longitude: number = Number(place.x);
      const latitude: number = Number(place.y);
      this.eventHandlerObj["onMarkerClick"]({ latitude, longitude });
    });
  }
}

export default KakaoMap;
