import React from 'react';
import RightArrow from '../icons/arrow-right';
import LeftArrow from '../icons/arrow-left';
import Button from './button';

const Icon = ({ left, right, children }) => (
  <span>
    {children}
    <style jsx>{`
      span {
        ${left ? 'margin-right: .5rem; margin-left: -.25rem;' : ''}
        ${right ? 'margin-left: .5rem; margin-right: -.25rem;' : ''}
        display: inline-block;
        vertical-align: middle;
        line-height: 1;
      }
    `}</style>
  </span>
);

const StepNav = ({ steps, nextLessonId, meta: { stepId, courseId, lessonId } }) => {
  if (!steps.length) {
    return null;
  }

  // intro step
  if (!stepId) {
    return (
      <Button invert href={`/learn/${courseId}/${lessonId}/${steps[0].id}`}>
        Start Now →
      </Button>
    );
  }

  const i = steps.findIndex(step => step.id === stepId);

  return (
    <div>
      <Button full href={`/learn/${courseId}/${lessonId}${i === 0 ? '' : `/${steps[i - 1].id}`}`}>
        <Icon left>
          <LeftArrow color="#0070f3" />
        </Icon>
        Prev
      </Button>
      <span className="spacer" />
      {i !== steps.length - 1 && (
        <Button invert href={`/learn/${courseId}/${lessonId}/${steps[i + 1].id}`}>
          Next
          <Icon right>
            <RightArrow color="white" />
          </Icon>
        </Button>
      )}
      {i === steps.length - 1 && nextLessonId && (
        <Button invert href={`/learn/${courseId}/${nextLessonId}`}>
          Next Lesson
        </Button>
      )}
      <style jsx>{`
        div {
          text-align: right;
        }
        .spacer {
          margin-left: 1rem;
        }
      `}</style>
    </div>
  );
};

export default StepNav;
