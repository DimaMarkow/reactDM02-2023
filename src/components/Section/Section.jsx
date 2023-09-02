import { Component } from 'react';
import css from 'components/Section/section.module.css';

class Section extends Component {
  render() {
    return (
      <div className={css.wrapper}>
        <h2 className={css.title}>{this.props.title}</h2>
        {this.props.children}
      </div>
    );
  }
}

export default Section;
