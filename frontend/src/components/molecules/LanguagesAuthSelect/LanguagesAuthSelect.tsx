import React from 'react';
import { useAppDispatch } from 'hooks/store';
import { Wrapper } from './LanguagesAuthSelect.style';
import { ReactComponent as En } from 'assets/image/en.svg';
import { ReactComponent as Pl } from 'assets/image/pl.svg';
import { setLanguage } from 'store/state/settingsSlice';

const LanguagesAuthSelect = () => {
  const dispatch = useAppDispatch();

  const languageChangeHandler = (e: React.MouseEvent<SVGElement>) => {
    const target = e.target as Element;
    if ((target.closest('svg') as SVGSVGElement) !== null) {
      const language = target.closest('svg')?.dataset.language;
      if (language) {
        dispatch(setLanguage(language));
      }
    }
  };
  return (
    <Wrapper>
      <En data-language="en" onClick={languageChangeHandler} />
      <Pl data-language="pl" onClick={languageChangeHandler} />
    </Wrapper>
  );
};

export default LanguagesAuthSelect;
