
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-sp4ik5bs8n',
  shadow: true,
})
export class Csp4ik5bs8n {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  