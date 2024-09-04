import React from 'react';
import { Card, Tag, Button, Row, Col } from 'antd';
import { CalendarOutlined, EyeOutlined } from '@ant-design/icons';
import './styles.scss';

interface JobCardProps {
    companyName: string;
    location: string;
    jobTitle: string;
    jobId: string;
    jobType: string;
    educationLevel: string;
    postedDate: string;
    views: number;
    tags: string[];
}

const JobCard: React.FC<JobCardProps> = ({
    companyName,
    location,
    jobTitle,
    jobId,
    jobType,
    educationLevel,
    postedDate,
    views,
    tags,
}) => {
    return (
        <Card className="job-card">
            <Row>
                <Col span={4}>
                    <div className="company-logo">
                        <img src="/path-to-your-logo.png" alt="company logo" />
                    </div>
                </Col>
                <Col span={20}>
                    <div className="job-info">
                        <h3>{jobTitle}</h3>
                        <p>{companyName} - {location}</p>
                        <div className="tags">
                            {tags.map((tag, index) => (
                                <Tag key={index}>{tag}</Tag>
                            ))}
                        </div>
                        <div className="details">
                            <span>Job ID: {jobId}</span>
                            <span>Job Type: {jobType}</span>
                            <span>Education Level: {educationLevel}</span>
                        </div>
                        <div className="meta">
                            <span><CalendarOutlined /> {postedDate}</span>
                            <span><EyeOutlined /> {views}</span>
                        </div>
                        <Button type="primary" className="apply-button">Apply Now</Button>
                    </div>
                </Col>
            </Row>
        </Card>
    );
};

export default JobCard;
