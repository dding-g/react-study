import React, { memo } from 'react';
import { Input, Typography } from 'antd';
import { Container, Row, Col } from 'reactstrap';

import propTypes from 'prop-types';

class BasicInputWithName extends React.Component {
    render() {
        const { title, onChangeInput } = this.props;
        const { Text } = Typography;

        return (
            <Container>
                <Row>
                    <Col xs="4">
                        <Text>{title}</Text>
                    </Col>
                    <Col xs="6">
                        <Input onChange={onChangeInput} />
                    </Col>
                </Row>
            </Container>
        );
    }
}

BasicInputWithName.propTypes = {
    title: propTypes.string,
    onChangeInput: propTypes.func,
};

BasicInputWithName.defaultProps = {
    title: '',
    onChangeInput: () => {},
};

export default memo(BasicInputWithName);