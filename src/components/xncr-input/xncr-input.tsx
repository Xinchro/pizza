import { Component, Event, EventEmitter, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'xncr-input',
  styleUrl: 'xncr-input.css',
  shadow: true,
})
export class XncrInput {
  @Prop() name: string;
  @Prop() idOverride: string = '';
  @Prop() button: string = '';
  @Prop() label: string = '';
  @Prop() labelPos: 'above' | 'side' = 'side';
  @Prop() placeholder: string = '';
  @Prop() value: string = '';
  @Prop() readOnly: boolean = false;
  @Event() clicked: EventEmitter<PointerEvent>;

  render() {
    return (
      <Host>
        {this.label && <label class={`${this.labelPos}`} htmlFor={this.idOverride}>{this.label}</label>}
        <input
          class={`${this.button ? 'has-button' : ''} ${this.label ? `label-${this.labelPos}` : ''}`}
          type="text"
          name={this.name}
          id={this.idOverride}
          placeholder={this.placeholder}
          value={this.value}
          readOnly={this.readOnly}
        />
        {this.button && <button
          class={`${this.label ? `label-${this.labelPos}` : ''}`}
          onClick={event => this.clicked.emit(event)}
        >{this.button}</button>}
      </Host>
    );
  }
}
