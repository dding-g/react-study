import { render, fireEvent } from '@testing-library/react';
import UnControlledCheckBox from './UnControlledCheckBox';

test('UnControlledCheckBox testing', () => {
    const checkboxList = [{ value: 'test1' }, { value: 'test2' }, { value: 'test3' }];
    let currentValue = '';
    const onChangeCheckbox = (e) => {
        currentValue = e.target.value;
    };

    const { getByText } = render(
        <UnControlledCheckBox list={checkboxList} onChangeCheckbox={onChangeCheckbox} />
    );
    const elementTest1 = getByText('test1');
    const elementTest2 = getByText('test2');
    const elementTest3 = getByText('test3');

    fireEvent.click(elementTest1);
    expect(elementTest1).toEqual('test1');
    expect(elementTest1.checked).toEqual(true);

    fireEvent.click(elementTest2);
    expect(elementTest2).toEqual('test2');
    expect(elementTest2.checked).toEqual(true);

    fireEvent.click(elementTest3);
    expect(elementTest3).toEqual('test3');
    expect(elementTest3.checked).toEqual(true);
});