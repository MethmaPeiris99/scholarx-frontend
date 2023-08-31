import React, { useState } from 'react';

import {
  AppstoreOutlined,
  BarsOutlined,
  DownOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import {
  Avatar,
  Button,
  Card,
  Col,
  Divider,
  Input,
  List,
  Radio,
  Row,
  Space,
  Typography,
} from 'antd';

import styles from './MentorProfile.css';
import { MentorList } from '../MentorList/MentorList.component';

const { Paragraph, Text, Title } = Typography;

const data = [
  {
    profile: {
      image_url: 'profile1.jpg',
      first_name: 'John',
      last_name: 'Doe',
    },
    application: {
      designation: 'Software Engineer',
      company: 'TechCo',
    },
  },
  {
    profile: {
      image_url: 'profile2.jpg',
      first_name: 'Jane',
      last_name: 'Smith',
    },
    application: {
      designation: 'Product Manager',
      company: 'Innovate Inc.',
    },
  },
];

const MentorProfile: React.FC = () => {
  const [display, setDisplay] = useState('grid');

  return (
    <div className={styles.mentorProfileContainer}>
      {/* Mentor main details container*/}
      <Row>
        <Col span={4}>
          <Avatar size={140} />
        </Col>
        <Col span={20}>
          <Space direction="vertical" size={7}>
            <Text className={styles.primaryTitle}>John Doe</Text>
            <Space direction="horizontal" size={590} wrap>
              <Text className={styles.mentorProfileText}>
                Software Engineer, Google
              </Text>
              <Button type="primary" className={styles.applyButton}>
                Apply
              </Button>
            </Space>
          </Space>
          <Divider />
        </Col>
      </Row>

      {/* Mentor interests container*/}
      <Row>
        <Col span={18}>
          <Space direction="horizontal" size={30} align="start">
            <Space direction="vertical" size={0}>
              <Title className={styles.tertiaryTitle} level={5}>
                Category
              </Title>
              <ul>
                <li>
                  <Text className={styles.mentorProfileText}>
                    Computer Science
                  </Text>
                </li>
              </ul>
            </Space>
            <Space direction="vertical" size={0}>
              <Title className={styles.tertiaryTitle} level={4}>
                Fields of interests
              </Title>
              <ul>
                <li>
                  <Text className={styles.mentorProfileText}>
                    Machine Learning
                  </Text>
                </li>
                <li>
                  <Text className={styles.mentorProfileText}>Big Data</Text>
                </li>
              </ul>
            </Space>
            <Space direction="vertical" size={0}>
              <Title className={styles.tertiaryTitle} level={4}>
                Projects
              </Title>
              <ul>
                <li>
                  <Text className={styles.mentorProfileText}>NLP</Text>
                </li>
              </ul>
            </Space>
          </Space>
        </Col>
        <Col span={6}>
          <Space direction="horizontal" size={20} align="start">
            <Divider type="vertical" style={{ height: '130px' }} />
            <a href="">LinkedIn</a>
            <a href="">Google Scholar</a>
            <a href="">Website</a>
          </Space>
        </Col>
      </Row>

      {/* Mentor bio container*/}
      <Row>
        <Col>
          <Title className={styles.tertiaryTitle} level={4}>
            Bio
          </Title>
          <Paragraph className={styles.mentorProfileText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Paragraph>
        </Col>
      </Row>

      {/* Mentor success stories container*/}
      <Row>
        <Col span={24}>
          <Title className={styles.tertiaryTitle} level={4}>
            Success Stories
          </Title>
          <Divider style={{ marginTop: '0' }} />
          <Space direction="horizontal" size={10} wrap>
            <Card className={styles.mentorStoryCard}>
              <Title className={styles.tertiaryTitle} level={4}>
                Story
              </Title>
            </Card>
            <Card className={styles.mentorStoryCard}>
              <Title className={styles.tertiaryTitle} level={4}>
                Story
              </Title>
            </Card>
            <Card className={styles.mentorStoryCard}>
              <Title className={styles.tertiaryTitle} level={4}>
                Story
              </Title>
            </Card>
            <Card className={styles.mentorStoryCard}>
              <Title className={styles.tertiaryTitle} level={4}>
                Story
              </Title>
            </Card>
          </Space>
        </Col>
      </Row>

      {/* Past mentees container*/}
      <Row align="middle">
        <Col span={24}>
          <Title className={styles.tertiaryTitle} level={4}>
            Past Mentees
          </Title>
          <Divider style={{ marginTop: '0' }} />
        </Col>
        <Col span={12}>
          <Space direction="horizontal">
            <Input
              placeholder="Type the keywords here to search"
              style={{ width: '354px' }}
              suffix={<SearchOutlined className={styles.antIcon} />}
            />
            <Text className={styles.mentorProfileText}>Advanced Options</Text>
          </Space>
        </Col>
        <Col span={6} offset={6}>
          <Space direction="horizontal">
            <Text className={styles.mentorProfileText}>Sort By</Text>
            <Button>
              <Text className={styles.mentorProfileText}>A - Z</Text>
              <DownOutlined className={styles.antIcon} />
            </Button>
            <Radio.Group
              value={display}
              onChange={(e) => setDisplay(e.target.value)}
            >
              <Radio.Button value="grid">
                <AppstoreOutlined className={styles.antIcon} />
              </Radio.Button>
              <Radio.Button value="list">
                <BarsOutlined className={styles.antIcon} />
              </Radio.Button>
            </Radio.Group>
          </Space>
        </Col>
        <Col span={24} style={{ marginTop: '50px' }}>
          <List pagination={{ align: 'end', position: 'top' }}>
            <MentorList mentors={data} />
            {/* {display === 'grid' ? (<MentorList mentors={data} />) : {''}} */}
          </List>
        </Col>
      </Row>
    </div>
  );
};
export default MentorProfile;
