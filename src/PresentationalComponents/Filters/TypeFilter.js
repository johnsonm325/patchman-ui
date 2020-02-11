import { conditionalFilterType } from '@redhat-cloud-services/frontend-components';
import React from 'react';
import { advisoryTypes } from '../../Utilities/constants';

const typeFilter = apply => {
    const [type, setType] = React.useState();

    const filterByType = value => {
        apply({ filter: { type: value } });
    };

    return {
        label: 'Type',
        value: 'type',
        type: conditionalFilterType.checkbox,
        filterValues: {
            onChange: (event, value) => {
                type;
                setType(value);
                filterByType(value);
            },
            items: advisoryTypes
        }
    };
};

export default typeFilter;
