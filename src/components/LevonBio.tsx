import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const BioContainer = styled.div`
  background: var(--bg);
  min-height: 100vh;
  padding: 6rem 2rem 2rem;
`;

const BioCard = styled(motion.div)`
  background: rgba(26, 26, 26, 0.8);
  border-radius: 20px;
  padding: 3rem;
  margin: 0 auto;
  max-width: 1000px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(45deg, var(--secondary), #00bfff);
  }
`;

const BioTitle = styled(motion.h1)`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
  background: linear-gradient(45deg, var(--secondary), #00bfff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const BioContent = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text);
`;

const BioText = styled(motion.p)`
  margin-bottom: 1.5rem;
  color: var(--text-secondary);
`;

const StatsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`;

const StatItem = styled(motion.div)`
  background: rgba(0, 212, 255, 0.1);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 2px solid rgba(0, 212, 255, 0.2);
`;

const StatValue = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: var(--secondary);
  display: block;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: var(--text-secondary);
  font-size: 0.9rem;
`;

const SectionTitle = styled(motion.h2)`
  color: var(--text);
  font-size: 1.8rem;
  margin: 2rem 0 1rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid var(--secondary);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 50px;
    height: 3px;
    background: linear-gradient(45deg, var(--secondary), #00bfff);
  }
`;

const ProjectsList = styled(motion.ul)`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
`;

const ProjectItem = styled(motion.li)`
  background: rgba(0, 212, 255, 0.1);
  margin: 1rem 0;
  padding: 1rem 1.5rem;
  border-radius: 10px;
  border-left: 4px solid var(--secondary);
  position: relative;

  &::before {
    content: '🎯';
    position: absolute;
    left: -15px;
    top: 50%;
    transform: translateY(-50%);
    background: var(--secondary);
    color: white;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
  }
`;

const SkillsSection = styled(motion.div)`
  background: rgba(0, 212, 255, 0.05);
  padding: 2rem;
  border-radius: 15px;
  margin: 2rem 0;
  border: 2px solid rgba(0, 212, 255, 0.1);
`;

const SkillsTitle = styled.h3`
  color: var(--secondary);
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  gap: 1rem;
`;

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const SkillName = styled.span`
  font-weight: bold;
  color: var(--text);
  font-size: 1rem;
`;

const SkillLevel = styled.div`
  height: 8px;
  background: rgba(0, 212, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
`;

const SkillBar = styled(motion.div)<{ width: string }>`
  height: 100%;
  background: linear-gradient(45deg, var(--secondary), #00bfff);
  border-radius: 4px;
  width: ${props => props.width};
`;

const ContactInfo = styled(motion.div)`
  background: rgba(0, 212, 255, 0.1);
  padding: 2rem;
  border-radius: 15px;
  margin: 2rem 0;
  border: 2px solid rgba(0, 212, 255, 0.2);
`;

const ContactTitle = styled.h3`
  color: var(--secondary);
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const BackButton = styled(Link)`
  display: inline-block;
  padding: 15px 30px;
  background: linear-gradient(45deg, var(--secondary), #00bfff);
  color: white;
  text-decoration: none;
  border-radius: 30px;
  font-weight: bold;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 212, 255, 0.3);
  text-align: center;
  margin: 2rem auto;
  display: block;
  max-width: 200px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 212, 255, 0.4);
  }
`;

const LevonBio: React.FC = () => {
  return (
    <BioContainer>
      <BioCard
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <BioTitle
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          🎯 Levon4ik - гланый человек в этой схеме
        </BioTitle>
        
        <BioContent>
          <BioText
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <strong>Levon4ik</strong> - выдающийся человек аналитик и эксперт по 
            проебыванию денег в ебаный роблокс.
          </BioText>

          <BioText
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Начав как обычный игрок, levon4ik быстро зарекомендовал себя как мастер проеба денег в никуда.
          </BioText>

          <StatsGrid
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <StatItem
              whileHover={{ 
                scale: 1.05,
                y: -5
              }}
              transition={{ 
                type: "spring", 
                stiffness: 400,
                damping: 25
              }}
            >
              <StatValue>$200+</StatValue>
              <StatLabel>Вложено в проекты</StatLabel>
            </StatItem>
            <StatItem
              whileHover={{ 
                scale: 1.05,
                y: -5
              }}
              transition={{ 
                type: "spring", 
                stiffness: 400,
                damping: 25
              }}
            >
              <StatValue>100+</StatValue>
              <StatLabel>проебано с них денег</StatLabel>
            </StatItem>
            <StatItem
              whileHover={{ 
                scale: 1.05,
                y: -5
              }}
              transition={{ 
                type: "spring", 
                stiffness: 400,
                damping: 25
              }}
            >
              <StatValue>90%</StatValue>
              <StatLabel>Точность попадания </StatLabel>
            </StatItem>
            <StatItem
              whileHover={{ 
                scale: 1.05,
                y: -5
              }}
              transition={{ 
                type: "spring", 
                stiffness: 400,
                damping: 25
              }}
            >
              <StatValue>5+</StatValue>
              <StatLabel>Лет проеба денег</StatLabel>
            </StatItem>
          </StatsGrid>

          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            🔧 экспертиза проеба денег
          </SectionTitle>
          <BioText
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
              Levon4ik специализируется на глубоком анализе куда вложить деньги своевчасно, и как сделать так чтобы они не вернулись обратно.
          </BioText>

          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            🚀 Ключевые моменты
          </SectionTitle>
          <ProjectsList
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            <ProjectItem
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ 
                x: 10,
                backgroundColor: "rgba(0, 212, 255, 0.2)"
              }}
              transition={{ 
                duration: 0.6, 
                delay: 1.8,
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
            >
              Проебал на Chilli Hub 10$
            </ProjectItem>
            <ProjectItem
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ 
                x: 10,
                backgroundColor: "rgba(0, 212, 255, 0.2)"
              }}
              transition={{ 
                duration: 0.6, 
                delay: 2.0,
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
            >
              Проебано на Garama AutoJoiner 10$
            </ProjectItem>
            <ProjectItem
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ 
                x: 10,
                backgroundColor: "rgba(0, 212, 255, 0.2)"
              }}
              transition={{ 
                duration: 0.6, 
                delay: 2.2,
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
            >
              Проебано на Serotonin 10$
            </ProjectItem>
            <ProjectItem
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ 
                x: 10,
                backgroundColor: "rgba(0, 212, 255, 0.2)"
              }}
              transition={{ 
                duration: 0.6, 
                delay: 2.4,
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
            >
              Сидит на ебаной 11 винде вроде
            </ProjectItem>
          </ProjectsList>

          <SkillsSection
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 2.8 }}
          >
            <SkillsTitle>🛠️ навыки</SkillsTitle>
            <SkillsGrid>
              <SkillItem>
                <SkillName>Влаживать свовчасно</SkillName>
                <SkillLevel>
                  <SkillBar 
                    width="5%" 
                    initial={{ width: 0 }}
                    animate={{ width: "5%" }}
                    transition={{ duration: 1, delay: 3.0 }}
                  />
                </SkillLevel>
              </SkillItem>
              <SkillItem>
                <SkillName>Проебать деньги</SkillName>
                <SkillLevel>
                  <SkillBar 
                    width="95%" 
                    initial={{ width: 0 }}
                    animate={{ width: "95%" }}
                    transition={{ duration: 1, delay: 3.2 }}
                  />
                </SkillLevel>
              </SkillItem>
              <SkillItem>
                <SkillName>Анализ куда вложить</SkillName>
                <SkillLevel>
                  <SkillBar 
                    width="10%" 
                    initial={{ width: 0 }}
                    animate={{ width: "10%" }}
                    transition={{ duration: 1, delay: 3.4 }}
                  />
                </SkillLevel>
              </SkillItem>
              <SkillItem>
                <SkillName>Система проеба</SkillName>
                <SkillLevel>
                  <SkillBar 
                    width="15%" 
                    initial={{ width: 0 }}
                    animate={{ width: "15%" }}
                    transition={{ duration: 1, delay: 3.6 }}
                  />
                </SkillLevel>
              </SkillItem>
            </SkillsGrid>
          </SkillsSection>

          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3.8 }}
          >
            💡 Инновационные методы проеба
          </SectionTitle>
          <BioText
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 4.0 }}
          >
            Levon4ik известен своими революционными подходами к проебу денег. 
            Он создал несколько уникальных методов вложения в ебаный роблокс, 
            которые стали стандартом в индустрии проеба денег.
          </BioText>

          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 4.2 }}
          >
            🎓 Образовательная деятельность
          </SectionTitle>
          <BioText
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 4.4 }}
          >
            Levon4ik активно делится своими знаниями о том, как проебать деньги, 
            проводя мастер-классы по инвестированию в никуда, создавая обучающие 
            материалы и консультируя молодых проебщиков. Его руководства по 
            проебу стали настольной книгой для многих.
          </BioText>

          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 4.6 }}
          >
            🏆 Достижения и награды
          </SectionTitle>
          <BioText
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 4.8 }}
          >
            • Лауреат премии "Лучший проебщик года" 2023<br/>
            • Обладатель звания "Мастер своевременных вложений"<br/>
            • Победитель конкурса "Кто быстрее проебет 100$"<br/>
            • Почетный член клуба "Инвесторы в никуда"
          </BioText>

          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 5.0 }}
          >
            🎯 Планы на будущее
          </SectionTitle>
          <BioText
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 5.2 }}
          >
            Levon4ik планирует продолжить свою миссию по проебу денег в Roblox. 
            В планах - создать новый проект, который точно не окупится, 
            и написать книгу "Как проебать деньги: руководство для начинающих".
          </BioText>

          <ContactInfo
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 5.4 }}
          >
            <ContactTitle>📞 Контакты</ContactTitle>
            <BioText>
              Levon4ik всегда готов поделиться опытом проеба денег и 
              помочь с решением сложных финансовых задач. Его экспертиза 
              доступна для всех, кто стремится к финансовому краху.
            </BioText>
          </ContactInfo>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <BackButton to="/">
              ← Вернуться к новостям
            </BackButton>
          </motion.div>
        </BioContent>
      </BioCard>
    </BioContainer>
  );
};

export default LevonBio;