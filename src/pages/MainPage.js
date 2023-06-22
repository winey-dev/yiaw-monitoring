import React from 'react';
import { Card, CardBody, CardHeader, CardTitle, Gallery, PageSection, PageSectionVariants } from '@patternfly/react-core';
import { UserIcon, ChartLineIcon, ApplicationsIcon, UserFriendsIcon } from '@patternfly/react-icons';

const Main = () => {
  const datas = [
    {
      "title": "Dashboard",
      "description": "저장된 Metric Data를 사용자가 원하는 형태로 출력해주는 화면",
      "icon": <ChartLineIcon/>
    },
    {
      "title": "Applictaion",
      "description": "yiaw awsome에서 관리하는 Application을 토폴로지 형식으로 보여주는 화면",
      "icon": <ApplicationsIcon/>
    },
    {
      "title": "Account",
      "description": "yiaw awsome에 로그인하기 위한 계정 설정",
      "icon": <UserIcon/>
    },
    {
      "title": "Role",
      "description": "계정별 권한 설정 화면",
      "icon": <UserFriendsIcon/>
    }
  ]
  return (
    <React.Fragment>
      <PageSection variant={PageSectionVariants.light} isFilled>
        <Gallery hasGutter>
        {datas.map((data, idx) => (
          <Card isCompact>
            <CardHeader> </CardHeader>
            <CardTitle>{data.icon} {data.title} </CardTitle>
            <CardBody> {data.description} </CardBody>
          </Card>
        ))
        }
        </Gallery>
      </PageSection>
    </React.Fragment>
  );
};

export default Main;