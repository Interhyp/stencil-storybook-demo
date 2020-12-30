import { Component, Host, h, Prop } from '@stencil/core';
import classnames from 'classnames';

@Component({
  tag: 'ihg-button',
  styleUrl: 'ihg-button.scss',
  shadow: true,
})
export class IhgButton {
  @Prop() label = '';
  @Prop() type: 'primary' | 'secondary' = 'primary';
  @Prop({ reflect: true }) disabled = false;

  render(): HTMLElement {
    return <Host>
      <button
        class={classnames(
          'button',
          this.type,
          this.disabled && 'disabled',
        )}
        type="button"
      >
        <span>{this.label}</span>
      </button>
    </Host>;
  }
}
