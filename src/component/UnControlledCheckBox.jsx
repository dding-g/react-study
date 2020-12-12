import React, { memo } from 'react';

import propTypes from 'prop-types';
import { Checkbox } from 'antd';

class UnControlledCheckBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const { onChangeCheckbox, list } = this.props;

        return (
            <Checkbox.Group onChange={onChangeCheckbox}>
                {list.map((v) => (
                    <Checkbox aria-label={v.value} key={v.value} value={v.value} />
                ))}
            </Checkbox.Group>
        );
    }
}

UnControlledCheckBox.defaultProps = {
    onChangeCheckbox: () => {},
    list: [],
};

UnControlledCheckBox.propTypes = {
    onChangeCheckbox: propTypes.func,
    list: propTypes.array,
};

export default memo(UnControlledCheckBox);