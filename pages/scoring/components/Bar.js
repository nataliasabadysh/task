// Core
import React, { Component } from 'react';
import Select from 'react-select';

const optionsQuarter = [ // date
    {
        value: 'current',
        label: 'Current',
    },
    {
        value: 'previous',
        label: 'Previous',
    }
];

const optionMissions = [ // depertment 
    {
        value: 'latest',
        label: 'Latest',
    },
    {
        value: 'previous',
        label: 'Previous',
    }
];

export default class Bar extends Component {
    state = {
        quarter: 'current',
        mission: 'latest',
    }

    selectorQuarter = (selectedQuarter) => {
        this.setState({
            quarter: selectedQuarter.value,
        });
    }

    selectorMission = (selectedMission) => {
        this.setState({
            mission: selectedMission.value,
        });
    }

    render() {
        const selectedQuarter = optionsQuarter.find(
            (quarter) => quarter.value === this.state.quarter,
        );
        
        const selectedMission = optionMissions.find(
            (mission) => mission.value === this.state.mission,
        );

        return (
            <div className='header'>
                <div className='Select_header'>
                    <div>
                        <i> Quarter </i>
                        <Select
                            className = 'Select'
                            dropdownMode='select'
                            options={optionsQuarter}
                            value={selectedQuarter}
                            onChange={this.selectorQuarter}
                        />
                    </div>
                    <div>
                        <i> Mission </i>
                        <Select
                            className = 'Select'
                            dropdownMode='select'
                            options={optionMissions}
                            value={selectedMission}
                            onChange={this.selectorMission}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

