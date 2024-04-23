
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-3erd4s9c5m',
  shadow: true,
})
export class C3erd4s9c5m {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  