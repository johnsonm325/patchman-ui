import React, { useState } from 'react';
import {
    FormGroup,
    DatePicker,
    Flex,
    FlexItem
} from '@patternfly/react-core';
import useFormApi from '@data-driven-forms/react-form-renderer/use-form-api';
import useFieldApi from '@data-driven-forms/react-form-renderer/use-field-api';

const ToDateField = (props) => {
    const { input } = useFieldApi(props);
    const formOptions = useFormApi();
    const values = formOptions.getState()?.values;

    const [toDate, setToDate] = useState(values?.toDate);

    return (
        <FormGroup fieldId="toDate" label="Patch set date" isRequired>
            <Flex>
                <FlexItem lg={2} md={2}>
                    Upto
                </FlexItem>
                <FlexItem lg={10} md={10}>
                    <DatePicker
                        isRequired
                        value={toDate}
                        onChange={(val) => {
                            input.onChange(val);
                            setToDate(val);
                        }}
                        aria-label="toDate"
                    />
                </FlexItem>
            </Flex>
        </FormGroup>
    );
};

export default ToDateField;
