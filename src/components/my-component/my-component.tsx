import { Component } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {

  showModal = () => {
    this.dialog.showModal();
  }

  onClose = (e: UIEvent) => {
    console.log(e);
  };


  accept = () => {
    this.dialog.close('agree');
  }

  dialog: HTMLDialogElement;
  render() {
    return (
      <div>
        <button type="button" onClick={this.showModal}>Show Modal</button>
        <dialog
          // Expected to be defined
          // @ts-ignore
          onClose={this.onClose}
          onCancel={this.onClose}
          ref={(el: HTMLDialogElement) => { this.dialog = el; }}
        >
          Do you love web components and accessibility?
          <button type="button" onClick={this.accept}>Accept</button>
        </dialog>
      </div>
    );
  }
}
