
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-06u1uquy7p',
  shadow: true,
})
export class C06u1uquy7p {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  