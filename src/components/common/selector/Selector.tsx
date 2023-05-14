import React from 'react'
import { SelectionObject } from '../../../models/SelectionObject'
import { Link } from 'react-router-dom';
import ConditionalWrapper from '../conditional-wrapper/ConditionalWrapper';

interface SelectorProps {
    objects: SelectionObject[];
    linkable: boolean;
    className: string;
}

const linkWrapper = (children: JSX.Element[], className: string, object: SelectionObject) => {
    return <Link to={`/${className}/${object.id}`} className={`${className}-link`}>{children}</Link>
}

function Selector({objects, linkable, className}: SelectorProps) {
    const imageList = objects.map((object: SelectionObject) => {
        return (
            <ConditionalWrapper condition={linkable} wrapper={children => linkWrapper(children, className, object)}>
                <img src={object.imageUrl} alt='' className={`${className}-banner`}></img>
                <span className={`${className}-name`}>{object.name}</span>
            </ConditionalWrapper>
        );
      });

  return (
    <>{imageList}</>
  )
}

export default Selector