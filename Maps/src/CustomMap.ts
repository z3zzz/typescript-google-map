export interface Markable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent?(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId)!, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(markable: Markable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: markable.location.lat,
        lng: markable.location.lng,
      },
    });

    if (markable.markerContent) {
      marker.addListener('click', () => {
        const infoWindow = new google.maps.InfoWindow({
          content: markable.markerContent(),
        });

        infoWindow.open(this.googleMap, marker);
      });
    }
  }
}
