import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'xncr-button',
  styleUrl: 'xncr-button.css',
  shadow: true,
})
export class XncrButton {
  @Prop() variant: string;

  @Prop() noiseAnim: boolean = false;

  render() {
    return (
      <Host>
        <button
          class={`${this.variant} ${this.noiseAnim ? 'noise-hover' : ''}`}
        ><slot></slot></button>
      </Host>
    )
  }
}
