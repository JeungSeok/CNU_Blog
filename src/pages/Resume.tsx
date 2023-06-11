import styled from '@emotion/styled';

const Title = styled.h1`
  font-size: 3rem;
  line-height: 1.5;
  letter-spacing: -0.004em;
  margin-top: 0px;
  font-weight: 800;
  color: #212529;
  margin-bottom: 2rem;
  word-break: keep-all;
`;
const Text = styled.p`
  width: 700px;
`;

const Resume = () => {
  return (
      <div>
        <Title>실전 코딩 수강</Title>
        <Text> 2023.03 ~ 2023.06 </Text>
        <Text> React, SpringBoot 등 다양한 실무 좐련 지식을 수강 </Text>
        <Title>2023 SQLD 자격증 획득</Title>
        <Text> 2023.06 </Text>
        <Text> Sql 개발자 학습 및 자격증 획득 </Text>
        <Title> 배포 문제에 당착</Title>
        <Text> 과제중 </Text>
        <Text> 배포 과정에서 문제가 발생해서 배포하지 못하는 중 </Text>
        <Text> 강사님께, 최선을 다한 점 고려하여 자비를 바람 </Text>
      </div>

  );
};

export default Resume;
