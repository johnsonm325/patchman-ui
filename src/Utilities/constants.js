import BugIcon from '@patternfly/react-icons/dist/js/icons/bug-icon';
import EnhancementIcon from '@patternfly/react-icons/dist/js/icons/enhancement-icon';
import SecurityIcon from '@patternfly/react-icons/dist/js/icons/security-icon';
import FlagIcon from '@patternfly/react-icons/dist/js/icons/flag-icon';
import React from 'react';
import { subtractDate } from './Helpers';

export const STATUS_REJECTED = 'rejected';
export const STATUS_LOADING = 'loading';
export const STATUS_RESOLVED = 'resolved';

export const compoundSortValues = {
    operating_system: {
        asc: 'osname,osmajor,osminor',
        desc: '-osname,-osmajor,-osminor'
    },
    applicable_advisories: {
        asc: 'rhsa_count,rhba_count,rhea_count',
        desc: '-rhsa_count,-rhba_count,-rhea_count'
    }
};

// messy check because of frontend-components tests
export const ENABLE_PACKAGES = window?.insights?.chrome?.isBeta && insights?.chrome?.isBeta();
export const storeListDefaults = {
    rows: [],
    status: {},
    metadata: {
        limit: 25,
        offset: 0,
        total_items: 0
    },
    expandedRows: {},
    selectedRows: {},
    queryParams: {
        page: 1,
        page_size: 20
    },
    error: {}
};

export const systemPackagesDefaultFilters = {
    filter: { updatable: ['true'] }
};

export const packagesListDefaultFilters = {
    filter: { systems_updatable: ['gt:0'] }
};

export const systemsListDefaultFilters = {
    filter: { stale: [true, false] }
};

export const publicDateOptions = [
    { apiValue: '', label: 'All', value: 'all' },
    {
        apiValue: `gt:${subtractDate(7)}`,
        label: 'Last 7 days',
        value: 'last7'
    },
    {
        apiValue: `gt:${subtractDate(30)}`,
        label: 'Last 30 days',
        value: 'last30'
    },
    {
        apiValue: `gt:${subtractDate(90)}`,
        label: 'Last 90 days',
        value: 'last90'
    },
    {
        apiValue: `gt:${subtractDate(365)}`,
        label: 'Last year',
        value: 'lastYear'
    },
    {
        apiValue: `lt:${subtractDate(365)}`,
        label: 'More than 1 year ago',
        value: 'moreThanYear'
    }
];

export const advisorySeverities = [
    {
        value: 0,
        label: 'N/A',
        color: 'var(--pf-global--Color--200)'
    },
    {
        value: 1,
        label: 'Low',
        color: 'var(--pf-global--Color--200)',
        text:
            'This rating is given to all other issues that have a security impact. These are the types of vulnerabilities' +
            ' that are believed to require unlikely circumstances to be able to be exploited, or where a successful exploit' +
            ' would give minimal consequences.'
    },
    {
        value: 2,
        label: 'Moderate',
        color: 'var(--pf-global--warning-color--100)',
        text:
            'This rating is given to flaws that may be more difficult to exploit but could still lead to some' +
            ' compromise of the confidentiality, integrity, or availability of resources, under certain circumstances.' +
            ' These are the types of vulnerabilities that could have had a Critical impact or Important impact' +
            ' but are less easily exploited based on a technical evaluation of the flaw, or affect unlikely' +
            ' configurations.'
    },
    {
        value: 3,
        label: 'Important',
        color: '#ec7a08',
        text:
            'This rating is given to flaws that can easily compromise the confidentiality, integrity, or availability' +
            ' of resources. These are the types of vulnerabilities that allow local users to gain privileges, allow' +
            ' unauthenticated remote users to view resources that should otherwise be protected by authentication,' +
            ' allow authenticated remote users to execute arbitrary code, or allow remote users to cause a denial' +
            ' of service.'
    },
    {
        value: 4,
        label: 'Critical',
        color: 'var(--pf-global--danger-color--100)',
        text:
            'This rating is given to flaws that could be easily exploited by a remote unauthenticated attacker' +
            ' and lead to system compromise (arbitrary code execution) without requiring user interaction.' +
            ' These are the types of vulnerabilities that can be exploited by worms. Flaws that require an authenticated' +
            ' remote user, a local user, or an unlikely configuration are not classed as Critical impact.'
    }
];

export const advisoryTypes = [
    {
        value: 'security',
        label: 'Security',
        icon: <SecurityIcon />
    },
    {
        value: 'bugfix',
        label: 'Bugfix',
        icon: <BugIcon />
    },
    {
        value: 'enhancement',
        label: 'Enhancement',
        icon: <EnhancementIcon />
    },
    {
        value: 'other',
        label: 'Other',
        icon: <FlagIcon />
    }
];

export const updatableTypes = [
    {
        value: false,
        label: 'Up-to-date '
    },
    {
        value: true,
        label: 'Upgradable'
    }
];

export const packagesListUpdatableTypes = [
    {
        value: 'eq:0',
        label: 'Systems up to date'
    },
    {
        value: 'gt:0',
        label: 'Systems with patches available'
    }
];

export const staleSystems = [
    {
        value: true,
        label: 'Stale'
    },
    {
        value: false,
        label: 'Fresh'
    }
];

export const rebootRequired = [
    {
        value: true,
        label: 'Required'
    },
    {
        value: false,
        label: 'Not required'
    }
];

export const osFilterTypes = [
    {
        label: 'RHEL 6.0',
        value: 'RHEL 6.0'
    },
    {
        label: 'RHEL 6.1',
        value: 'RHEL 6.1'
    },
    {
        label: 'RHEL 6.2',
        value: 'RHEL 6.2'
    },    {
        label: 'RHEL 6.3',
        value: 'RHEL 6.3'
    },
    {
        label: 'RHEL 6.4',
        value: 'RHEL 6.4'
    },
    {
        label: 'RHEL 6.5',
        value: 'RHEL 6.5'
    },
    {
        label: 'RHEL 6.6',
        value: 'RHEL 6.6'
    },
    {
        label: 'RHEL 6.7',
        value: 'RHEL 6.7'
    },
    {
        label: 'RHEL 6.8',
        value: 'RHEL 6.8'
    },
    {
        label: 'RHEL 6.9',
        value: 'RHEL 6.9'
    },
    {
        label: 'RHEL 6.10',
        value: 'RHEL 6.10'
    },
    {
        label: 'RHEL 7.0',
        value: 'RHEL 7.0'
    },
    {
        label: 'RHEL 7.1',
        value: 'RHEL 7.1'
    },
    {
        label: 'RHEL 7.2',
        value: 'RHEL 7.2'
    },
    {
        label: 'RHEL 7.3',
        value: 'RHEL 7.3'
    },
    {
        label: 'RHEL 7.4',
        value: 'RHEL 7.4'
    },
    {
        label: 'RHEL 7.5',
        value: 'RHEL 7.5'
    },
    {
        label: 'RHEL 7.6',
        value: 'RHEL 7.6'
    },
    {
        label: 'RHEL 7.7',
        value: 'RHEL 7.7'
    },
    {
        label: 'RHEL 7.8',
        value: 'RHEL 7.8'
    },
    {
        label: 'RHEL 7.9',
        value: 'RHEL 7.9'
    },
    {
        label: 'RHEL 8.0',
        value: 'RHEL 8.0'
    },
    {
        label: 'RHEL 8.1',
        value: 'RHEL 8.1'
    },
    {
        label: 'RHEL 8.2',
        value: 'RHEL 8.2'
    },
    {
        label: 'RHEL 8.3',
        value: 'RHEL 8.3'
    },
    {
        label: 'RHEL 8.4',
        value: 'RHEL 8.4'
    },
    {
        label: 'RHEL 8.5',
        value: 'RHEL 8.5'
    }
];

export const filterCategories = {
    advisory_type_name: {
        label: 'Advisory type',
        values: advisoryTypes
    },
    public_date: {
        label: 'Public date',
        values: publicDateOptions
    },
    updatable: {
        label: 'Status',
        values: updatableTypes
    },
    systems_updatable: {
        label: 'Status',
        values: packagesListUpdatableTypes
    },
    packages_updatable: {
        label: 'Patch status',
        values: packagesListUpdatableTypes
    },
    stale: {
        label: 'Status',
        values: staleSystems
    },
    reboot_required: {
        label: 'Reboot required',
        values: rebootRequired
    },
    os: {
        label: 'Operating system',
        values: osFilterTypes
    }
};

export const entityTypes = {
    advisories: 'advisories',
    packages: 'packages'
};

export const ReadOnlyNotification = {
    title: 'title',
    detail: 'message'
};

export const remediationIdentifiers = {
    package: 'patch-package',
    advisory: 'patch-advisory'
};

export const exportNotifications = (format) => ({
    pending: {
        title: `Preparing export of ${format?.toUpperCase()} format. Once complete, your download will start automatically.`,
        variant: 'info'
    },
    success: {
        title: `The exported ${format?.toUpperCase()} file is being downloaded`,
        variant: 'success'
    },
    error: {
        title: 'Couldn’t download export. Reinitiate this export to try again.',
        variant: 'danger'
    }
});

export const multiValueFilters = ['installed_evra', 'os'];
