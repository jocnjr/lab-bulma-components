import React, { Component } from 'react';

class CoolButton extends Component {

  render () {

    const buttonClass = props => {

      const buttonElements = {
        isActive: 'is-active',
        isBlack: 'is-black',
        isCentered: 'is-centered',
        isDanger: 'is-danger',
        isDark: 'is-dark',
        isFocused: 'is-focused',
        isGrouped: 'is-grouped',
        isHovered: 'is-hovered',
        isInfo: 'is-info',
        isInverted: 'is-inverted',
        isLarge: 'is-large',
        isLight: 'is-light',
        isLink: 'is-link',
        isLoading: 'is-loading',
        isMedium: 'is-medium',
        isOutlined: 'is-outlined',
        isPrimary: 'is-primary',
        isRight: 'is-right',
        isRounded: 'is-rounded',
        isSelected: 'is-selected',
        isSmall: 'is-small',
        isStatic: 'is-static',
        isSuccess: 'is-success',
        isText: 'is-text',
        isWarning: 'is-warning',
        isWhite: 'is-white',
      };

      let element = `button `;
      
      for (let attr in props) {
        if (buttonElements.hasOwnProperty(attr)) {
          element += ` ${buttonElements[attr]} `;
        }
      }

      if (props.className) element += props.className;

      return element;
    }

    return (
      <button className={buttonClass(this.props)}>
        {this.props.children}
      </button>
    )
  }
}

export default CoolButton;