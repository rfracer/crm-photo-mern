import React, { useEffect } from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
import { useForm } from 'react-hook-form';
import { useChangeUserLanguageMutation } from 'store';
import { Language } from 'types/types';
import { useAppDispatch, useAppSelector } from 'hooks/store';
import { FormMessage } from 'components/atoms/FormMessage/FormMessage';
import { StyledForm } from './SettingsLanguageForm.style';
import { Button } from 'components/atoms/Button/Button';
import { ButtonSpinner } from 'components/atoms/ButtonSpinner/ButtonSpinner';
import { SelectField } from 'components/molecules/SelectField/SelectField';
import { setLanguage } from 'store/state/settingsSlice';

const SettingsLanguageForm = () => {
  const [changeUserLanguage, { error, isSuccess, isError, isLoading }] =
    useChangeUserLanguageMutation();
  const user = useAppSelector((state) => state.auth.user);
  const language = useAppSelector((state) => state.settings.language);
  const dispatch = useAppDispatch();
  const intl = useIntl();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isDirty },
  } = useForm<Language>();

  useEffect(() => {
    if (user) {
      reset({
        language: language || 'en',
      });
    }
  }, [user, language, reset]);

  const handleUpdateLanguage = (data: Language): void => {
    changeUserLanguage(data);
    dispatch(setLanguage(data.language));
  };

  return (
    <StyledForm onSubmit={handleSubmit(handleUpdateLanguage)}>
      <SelectField
        {...register('language', { required: true })}
        label={intl.formatMessage({ id: 'settings.language' })}
        name="language"
        id="language"
        options={[
          { pl: intl.formatMessage({ id: 'settings.languages.pl' }) },
          { en: intl.formatMessage({ id: 'settings.languages.en' }) },
        ]}
      />
      <Button $outline type="submit">
        {isLoading ? (
          <ButtonSpinner />
        ) : (
          <FormattedMessage
            id="settings.btn_update_language"
            description="Update language button"
            defaultMessage="UPDATE LANGUAGE"
          />
        )}
      </Button>

      {isSuccess && !isDirty ? (
        <FormMessage success>
          <FormattedMessage
            id="settings.success_language_update"
            description="Application language updated - message"
            defaultMessage="Application language updated"
          />
        </FormMessage>
      ) : null}
      {isError && typeof error !== 'undefined' ? (
        <FormMessage>
          {'data' in error && error.status === 400
            ? error.data.error.message
            : null}
        </FormMessage>
      ) : null}
    </StyledForm>
  );
};

export default SettingsLanguageForm;
