
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-c7c5t54urq',
  shadow: true,
})
export class Cc7c5t54urq {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  