
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-qr0nl8jymd',
  shadow: true,
})
export class Cqr0nl8jymd {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  