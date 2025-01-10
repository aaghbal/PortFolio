import React from 'react';
import { ResponsiveRadar } from '@nivo/radar';


const RadarChart: React.FC = () => {
    const data = [
        { Skill: 'JavaScript', Proficiency: 90 },
        { Skill: 'TypeScript', Proficiency: 85 },
        { Skill: 'C', Proficiency: 80 },
        { Skill: 'C++', Proficiency: 75 },
        { Skill: 'Python', Proficiency: 88 },
        { Skill: 'HTML', Proficiency: 95 },
        { Skill: 'CSS', Proficiency: 90 },
        { Skill: 'Docker', Proficiency: 80 },
        { Skill: 'Git', Proficiency: 85 },
        { Skill: 'Bash', Proficiency: 70 },
        { Skill: 'Nginx', Proficiency: 65 },
        { Skill: 'Django', Proficiency: 85 },
        { Skill: 'ReactJs', Proficiency: 90 },
        { Skill: 'NextJs', Proficiency: 88 },
        { Skill: 'Tailwindcss', Proficiency: 87 },
    ];

    return (
        <div style={{ height: 500 }} className="w-full">
            <ResponsiveRadar
                data={data}
                keys={['Proficiency']} 
                indexBy="Skill" 
                valueFormat=">-.2f"
                margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
                borderColor={{ from: 'color' }}
                gridLabelOffset={36}
                dotSize={10}
                dotColor={{ theme: 'background' }}
                dotBorderWidth={2}
                colors={['#a5fa04']} 
                blendMode="multiply"
                motionConfig={{
                    mass: 1,
                    tension: 120,
                    friction: 14,
                    clamp: false,
                }}
                legends={[
                    {
                        anchor: 'top-left',
                        direction: 'column',
                        translateX: -50,
                        translateY: -40,
                        itemWidth: 80,
                        itemHeight: 20,
                        itemTextColor: '#999',
                        symbolSize: 12,
                        symbolShape: 'circle',
                        
                    },
                ]}
            />
        </div>
    );
};

export default RadarChart;
