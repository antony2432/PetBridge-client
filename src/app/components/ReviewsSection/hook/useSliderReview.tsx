import { useState } from 'react';
import { slides } from '../resource';

export default function useSliderReview() {
  const [selectIndex, setSelectIndex] = useState(0);
  const [dataSlide, setdataSlide] = useState(slides[0]);
  const [loading, setLoading] = useState(false);
  const selectNewProfile = (index: number, next = true) => {
    setLoading(false);
    setTimeout(() => {
      const condition = next ? selectIndex < slides.length - 1 : selectIndex > 0;
      const newIndex = next
        ? condition
          ? selectIndex + 1
          : 0
        : condition
          ? selectIndex - 1
          : slides.length - 1;
      setdataSlide(slides[newIndex]);
      setSelectIndex(newIndex);
    }, 500);
  };
  const previous = () => {
    selectNewProfile(selectIndex, false);
  };
  const next = () => {
    selectNewProfile(selectIndex, true);
  };
  return {
    next,
    previous,
    loading,
    dataSlide,
    setLoading,
  };
}