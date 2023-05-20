import { Autocomplete, TextInput } from 'evergreen-ui';

import './Autocomplete.scss';

interface IProps {
  title: string;
  onSelect: (term: string) => void;
  items: string[];
  placeHolder: string;
}

export default function CustomAutocomplete({
  title,
  onSelect,
  items,
  placeHolder,
}: IProps) {
  return (
    <Autocomplete
      title={title}
      onChange={onSelect}
      items={items}
    >
      {props => {
        const { getInputProps, getRef, inputValue, openMenu } = props;
        return (
          <TextInput
            placeholder={placeHolder}
            ref={getRef}
            {...getInputProps({
              onFocus: () => {
                openMenu()
              },
              value: inputValue
            })}
            className="autocomplete-input"
          />
        )
      }}
    </Autocomplete>
  );
}