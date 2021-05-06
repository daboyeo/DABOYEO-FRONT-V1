import React, {
  FC,
  useCallback,
  MouseEvent,
  useState,
  useRef,
  useEffect,
} from "react";
import { UploadIcon } from "../../Asset";
import useEnter from "../../lib/hooks/useEnter";
import useInput from "../../lib/hooks/useInput";
import KakaoMap from "../../lib/kakaoMap";
import { Location, ReportManagement } from "../../lib/payloads/report";
import * as S from "./styles";

interface Props {
  onBackgroundClick: () => void;
  onSubmit: (data: ReportManagement) => void;
  name: string;
  title: string;
  placeHolder: string;
  imgSrc: string;
}

const WriteModal: FC<Props> = ({
  imgSrc,
  name,
  onBackgroundClick,
  onSubmit,
  placeHolder,
  title,
}) => {
  const kakaoRef = useRef<any>();
  const [location, setLocation, changeLocation] = useInput<HTMLInputElement>(
    ""
  );
  const [locationData, setLocationData] = useState<Location | null>(null);
  const [content, setContent, changeContent] = useInput<HTMLTextAreaElement>(
    ""
  );
  const [files, setFiles] = useState<FileList>();
  const [tag, setTag, changeTag] = useInput<HTMLInputElement>("");
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    kakaoRef.current = new KakaoMap(document.getElementById("map"));
    kakaoRef.current.addEventListener("onMarkerClick", (location: Location) => {
      setLocationData(location);
    });
  }, []);

  const backgroundClickHandler = useCallback(
    (e: MouseEvent<HTMLInputElement>) => {
      if (e.currentTarget === e.target) onBackgroundClick();
    },
    [onBackgroundClick]
  );

  const submitLocation = useCallback(() => {
    if (!kakaoRef.current) return;
    setLocation("");
    kakaoRef.current.search(location);
  }, [location]);

  const submitTag = useCallback(() => {
    setTags((prev) => prev.concat(tag));
    setTag("");
  }, [tag]);

  const submitReport = useCallback(() => {
    const reportsData: ReportManagement = {
      content,
      location,
      tags,
      files: [],
    };
    onSubmit(reportsData);
  }, [content, location, tags]);

  const tagEnter = useEnter(submitTag);
  const locationEnter = useEnter(submitLocation);

  return (
    <S.Container onClick={backgroundClickHandler}>
      <S.Modal>
        <S.ModalHeader>
          <S.Title>{title}</S.Title>
        </S.ModalHeader>
        <S.ModalContent>
          <S.MyProfile>
            <S.ProfileImg src={imgSrc} />
            <S.Name>{name}</S.Name>
            <S.UploadBtn src={UploadIcon} />
          </S.MyProfile>
          <S.Textarea
            onChange={changeContent}
            value={content}
            placeholder={placeHolder}
          ></S.Textarea>
          <S.TagWrite>
            <S.TagList>
              {tags.map((tag) => (
                <S.Tag>#{tag}</S.Tag>
              ))}
            </S.TagList>
            <div>
              <S.TagInput
                placeholder="태그를 입력하세요"
                value={tag}
                onKeyDown={tagEnter}
                onChange={changeTag}
              />
            </div>
          </S.TagWrite>
          <S.LocationInput
            onKeyDown={locationEnter}
            placeholder="장소를 입력하세요"
            value={location}
            onChange={changeLocation}
          />
        </S.ModalContent>
        <S.KakaoMap id="map" />
        <S.ModalFooter>
          <S.SubmitButton onClick={submitReport}>게시</S.SubmitButton>
        </S.ModalFooter>
      </S.Modal>
    </S.Container>
  );
};

export default WriteModal;
