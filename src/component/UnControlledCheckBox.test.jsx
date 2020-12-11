import { render, fireEvent } from '@testing-library/react';
import UnControlledCheckBox from './UnControlledCheckBox';

test('UnControlledCheckBox testing', () => {
    const checkboxList = [{ value: 'test1' }, { value: 'test2' }, { value: 'test3' }];
    let currentValue = '';
    const onChangeCheckbox = (e) => {};

    const { getByLabelText } = render(
        <UnControlledCheckBox list={checkboxList} onChangeCheckbox={onChangeCheckbox} />
    );
    const elementTest1 = getByLabelText('test1');
    const elementTest2 = getByLabelText('test2');
    const elementTest3 = getByLabelText('test3');
    
    
    fireEvent.click(elementTest3);
    expect(elementTest3.value).toBe('test3');
    expect(elementTest3.checked).toEqual(true);

    fireEvent.click(elementTest1);
    expect(elementTest1.value).toBe('test1');
    expect(elementTest1.checked).toEqual(true);

    fireEvent.click(elementTest2);
    expect(elementTest2.value).toBe('test2');
    expect(elementTest2.checked).toEqual(true);

});