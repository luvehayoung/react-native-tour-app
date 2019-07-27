RNNaverMapMarkerManager 파일 react-native-nmap 폴더안에 있음

//내가 추가하는 부분 시작//
@ReactProp(name = "caption" )
public void setCaptionText(RNNaverMapMarker view, String message) {
    view.setCaptionText(message);
}

@ReactProp(name = "subcaption" )
public void setSubCaptionText(RNNaverMapMarker view, String message) {
    view.setSubCaptionText(message);
}

// 내가 추가하는 부분 끝//




RNNaverMapMarker
//내가 추가하는 부분 시작//
public void setCaptionText(String message) {
    feature.setCaptionText(message);
    feature.setCaptionAlign(Align.Top);
    feature.setCaptionTextSize(25);
    feature.setCaptionColor(Color.BLUE);
    feature.setCaptionHaloColor(Color.rgb(255, 255, 255));
}

public void setSubCaptionText(String message) {
    feature.setSubCaptionText(message);
    feature.setSubCaptionTextSize(16);
    feature.setSubCaptionColor(Color.BLUE);
    feature.setSubCaptionHaloColor(Color.rgb(255, 255, 255));
}

//내가 추가하는 부분 끝//
